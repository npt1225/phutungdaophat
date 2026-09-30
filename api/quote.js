// Vercel Serverless Function: /api/quote
// Nhận yêu cầu báo giá từ các trang HTML, chuyển tiếp sang Google Apps Script
// (Apps Script sẽ gửi mail về Gmail + ghi vào Google Sheet).
//
// Có thể đổi link bằng biến môi trường QUOTE_SCRIPT_URL trong Vercel
// (Project Settings -> Environment Variables). Không đặt thì dùng link bên dưới.

const SCRIPT_URL =
  process.env.QUOTE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbw9ylqepOi_Sf-j5rMOhGc4N5M84SYssmJD7vi8RmG1YxcTWo7cB5aEADFJIdZEMBeQNg/exec";

const s = (v, max = 2000) => (v == null ? "" : String(v)).trim().slice(0, max);

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Phương thức không được hỗ trợ." });
  }

  try {
    let d = req.body;
    if (typeof d === "string") d = JSON.parse(d);
    d = d || {};

    const store = s(d.store);
    const phone = s(d.phone);
    if (!store || !phone) {
      return res.status(400).json({ ok: false, message: "Vui lòng nhập tên cửa hàng và số điện thoại." });
    }

    // Danh sách sản phẩm (ưu tiên items, nếu không có thì dùng product)
    let product = s(d.product);
    if (Array.isArray(d.items) && d.items.length) {
      product = d.items
        .map((i) => `${s(i.name, 300)}${i.sku ? " (Mã: " + s(i.sku, 100) + ")" : ""} × ${s(i.quantity, 20) || 1}`)
        .join("\n");
    }

    // Chỉ đặt ký tự tiếng Việt trong BODY, không đặt vào header (tránh lỗi ByteString)
    const payload = {
      store,
      phone,
      product,
      sku: s(d.sku),
      quantity: s(d.quantity, 100),
      address: s(d.address),
      note: s(d.note),
      page: s(req.headers.referer || ""),
      honey: s(d.honey),
    };

    const r = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await r.text();
    let data = {};
    try { data = JSON.parse(text); } catch (e) { }

    if (data.success !== true) {
      console.error("APPS SCRIPT RESPONSE:", r.status, text.slice(0, 300));
      const detail = data.message || `Google trả về HTTP ${r.status}, kiểm tra lại link Web App và quyền "Bất kỳ ai".`;
      return res.status(502).json({ ok: false, message: detail });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("QUOTE API ERROR:", err);
    return res.status(500).json({ ok: false, message: "Lỗi máy chủ, vui lòng thử lại sau." });
  }
};