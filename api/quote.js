export default async function handler(req, res) {
  // =========================================================
  // CHỈ CHO PHÉP METHOD POST
  // =========================================================
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Phương thức không được phép."
    });
  }

  try {
    // =======================================================
    // NHẬN DỮ LIỆU TỪ FORM WEBSITE
    // =======================================================
    const {
      store,
      phone,
      product,
      sku,
      quantity,
      address,
      note
    } = req.body || {};

    // =======================================================
    // KIỂM TRA DỮ LIỆU BẮT BUỘC
    // =======================================================
    if (!store || !phone || !quantity) {
      return res.status(400).json({
        success: false,
        message:
          "Vui lòng nhập đầy đủ Tên cửa hàng, Số điện thoại/Zalo và Số lượng."
      });
    }

    // =======================================================
    // LẤY API KEY TỪ VERCEL ENVIRONMENT VARIABLES
    // =======================================================
    const resendApiKey = process.env.RESEND_API_KEY;

    // Email nhận báo giá
const toEmail = process.env.QUOTE_TO_EMAIL;

if (!toEmail) {
    return res.status(500).json({
        message: "Chưa cấu hình QUOTE_TO_EMAIL trên Vercel."
    });
}

    // =======================================================
    // KIỂM TRA RESEND API KEY
    // =======================================================
    if (!resendApiKey) {
      console.error("RESEND_API_KEY chưa được cấu hình.");

      return res.status(500).json({
        success: false,
        message:
          "Hệ thống email chưa được cấu hình. Vui lòng kiểm tra RESEND_API_KEY trên Vercel."
      });
    }

    // =======================================================
    // TẠO TIÊU ĐỀ EMAIL
    // =======================================================
    const emailSubject =
      "YÊU CẦU BÁO GIÁ - " +
      (product || "Sản phẩm từ Phụ Tùng Đào Phát");

    // =======================================================
    // TẠO NỘI DUNG EMAIL
    // =======================================================
    const emailHtml = `
<!DOCTYPE html>

<html lang="vi">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>Yêu cầu báo giá</title>

</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f3f4f6;
    font-family:Arial,Helvetica,sans-serif;
    color:#222;
  "
>

  <div
    style="
      max-width:680px;
      margin:30px auto;
      background:#ffffff;
      border-radius:12px;
      overflow:hidden;
      border:1px solid #e5e7eb;
    "
  >

    <!-- ================================================= -->
    <!-- HEADER -->
    <!-- ================================================= -->

    <div
      style="
        background:#0d6efd;
        padding:25px;
        color:#ffffff;
      "
    >

      <div
        style="
          font-size:24px;
          font-weight:bold;
          margin-bottom:8px;
        "
      >
        YÊU CẦU BÁO GIÁ MỚI
      </div>

      <div
        style="
          font-size:14px;
          opacity:0.95;
        "
      >
        Phụ Tùng Đào Phát
      </div>

    </div>


    <!-- ================================================= -->
    <!-- NỘI DUNG -->
    <!-- ================================================= -->

    <div style="padding:25px;">

      <!-- KHÁCH HÀNG -->

      <h3
        style="
          margin:0 0 15px 0;
          font-size:18px;
        "
      >
        👤 Thông tin khách hàng
      </h3>


      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="
          border-collapse:collapse;
          font-size:14px;
        "
      >

        <tr>

          <td
            style="
              width:190px;
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
              font-weight:bold;
              vertical-align:top;
            "
          >
            Cửa hàng / Gara / Đại lý
          </td>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
            "
          >
            ${escapeHtml(store)}
          </td>

        </tr>


        <tr>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
              font-weight:bold;
              vertical-align:top;
            "
          >
            Điện thoại / Zalo
          </td>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
            "
          >
            ${escapeHtml(phone)}
          </td>

        </tr>


        <tr>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
              font-weight:bold;
              vertical-align:top;
            "
          >
            Khu vực / Địa chỉ
          </td>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
            "
          >
            ${escapeHtml(address || "Chưa cung cấp")}
          </td>

        </tr>

      </table>


      <!-- SẢN PHẨM -->

      <h3
        style="
          margin:28px 0 15px 0;
          font-size:18px;
        "
      >
        📦 Thông tin sản phẩm
      </h3>


      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="
          border-collapse:collapse;
          font-size:14px;
        "
      >

        <tr>

          <td
            style="
              width:190px;
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
              font-weight:bold;
              vertical-align:top;
            "
          >
            Sản phẩm
          </td>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
            "
          >
            ${escapeHtml(product || "Chưa xác định")}
          </td>

        </tr>


        <tr>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
              font-weight:bold;
              vertical-align:top;
            "
          >
            Mã sản phẩm
          </td>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
            "
          >
            ${escapeHtml(sku || "Chưa có")}
          </td>

        </tr>


        <tr>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
              font-weight:bold;
              vertical-align:top;
            "
          >
            Số lượng dự kiến
          </td>

          <td
            style="
              padding:12px 8px;
              border-bottom:1px solid #eeeeee;
              font-weight:bold;
              color:#d62828;
              font-size:16px;
            "
          >
            ${escapeHtml(quantity)}
          </td>

        </tr>

      </table>


      <!-- GHI CHÚ -->

      <h3
        style="
          margin:28px 0 15px 0;
          font-size:18px;
        "
      >
        📝 Ghi chú thêm
      </h3>


      <div
        style="
          background:#f8fafc;
          border:1px solid #e5e7eb;
          border-radius:8px;
          padding:15px;
          line-height:1.6;
          font-size:14px;
          white-space:pre-line;
        "
      >
        ${escapeHtml(note || "Không có ghi chú")}
      </div>


      <!-- THÔNG BÁO -->

      <div
        style="
          margin-top:25px;
          padding:16px;
          background:#eef6ff;
          border-radius:8px;
          border-left:4px solid #0d6efd;
          font-size:14px;
          line-height:1.6;
        "
      >

        <strong>
          Có khách hàng vừa gửi yêu cầu báo giá trên website.
        </strong>

        <br>

        Vui lòng liên hệ lại khách hàng để tư vấn và báo giá.

      </div>

    </div>


    <!-- ================================================= -->
    <!-- FOOTER -->
    <!-- ================================================= -->

    <div
      style="
        padding:18px 25px;
        background:#f8f9fa;
        border-top:1px solid #eeeeee;
        font-size:12px;
        color:#777;
        text-align:center;
      "
    >

      Email được gửi tự động từ website
      <strong>Phụ Tùng Đào Phát</strong>.

    </div>

  </div>

</body>

</html>
`;

    // =======================================================
    // GỌI RESEND API
    // =======================================================

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`
        },

        body: JSON.stringify({
          from: "onboarding@resend.dev",

          to: [toEmail],

          subject: emailSubject,

          html: emailHtml
        })
      }
    );


    // =======================================================
    // ĐỌC KẾT QUẢ RESEND
    // =======================================================

    const resendData = await resendResponse.json();


    // =======================================================
    // RESEND TRẢ VỀ LỖI
    // =======================================================

    if (!resendResponse.ok) {

      console.error(
        "Resend API Error:",
        resendData
      );

      return res.status(500).json({
        success: false,
        message:
          "Resend không thể gửi email.",
        error:
          resendData
      });
    }


    // =======================================================
    // THÀNH CÔNG
    // =======================================================

    console.log(
      "Email báo giá đã gửi thành công:",
      resendData.id
    );


    return res.status(200).json({

      success: true,

      message:
        "Yêu cầu báo giá đã được gửi thành công.",

      emailId:
        resendData.id

    });


  } catch (error) {

    // =======================================================
    // LỖI HỆ THỐNG
    // =======================================================

    console.error(
      "Quote API Error:",
      error
    );

    return res.status(500).json({

      success: false,

      message:
        "Có lỗi xảy ra khi gửi yêu cầu báo giá.",

      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined

    });
  }
}


/**
 * =========================================================
 * CHỐNG HTML INJECTION
 * =========================================================
 */

function escapeHtml(value) {

  return String(value)

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");

}