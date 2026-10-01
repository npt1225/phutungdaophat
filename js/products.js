/* =====================================================================
   DANH SÁCH SẢN PHẨM DÙNG CHO Ô TÌM KIẾM - Phụ Tùng Đào Phát
   Thêm / sửa / xóa sản phẩm ngay tại đây, mọi trang import file này sẽ tự cập nhật.

   Mỗi sản phẩm:
     s = mã sản phẩm       n = tên hiển thị       t = loại (hiện dưới tên)
     c = nhóm (khớp mã trong DPS_CATS bên dưới)
     i = đường dẫn ảnh     u = đường dẫn trang chi tiết
     a = từ khóa tìm thêm (không hiển thị, có thể để "")
   Đường dẫn bắt đầu bằng "/" = tính từ thư mục gốc của website.
   ===================================================================== */

/* Các nhóm hiển thị thành nút lọc (nhóm chưa có sản phẩm sẽ tự ẩn) */
window.DPS_CATS = [["all", "Tất cả"], ["vongbi", "Vòng bi"], ["maphanh", "Má phanh"], ["curoa", "Dây curoa"], ["nhot", "Dầu nhớt"], ["bugi", "Bugi"], ["nuocmat", "Nước làm mát"],["nuocmat 222", "Nước làm mát 2"]];

window.DPS_PRODUCTS = [
    { "s": "6004-2RS", "n": "Vòng bi 6004-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6004-2RS/%E8%93%9D%E5%BA%956004-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6004-2rs.html", "a": "" },
    { "s": "6200-2RS", "n": "Vòng bi 6200-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6200-2RS/%E8%93%9D%E5%BA%956200-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6200-2rs.html", "a": "" },
    { "s": "6201-2RS", "n": "Vòng bi 6201-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6201-2RS/%E8%93%9D%E5%BA%956201-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6201-2rs.html", "a": "" },
    { "s": "6202-2RS", "n": "Vòng bi 6202-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6202-2RS/%E8%93%9D%E5%BA%956202-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6202-2rs.html", "a": "" },
    { "s": "6203-2RS", "n": "Vòng bi 6203-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6203-2RS/%E8%93%9D%E5%BA%956203-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6203-2rs.html", "a": "" },
    { "s": "6204-2RS", "n": "Vòng bi 6204-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6204-2RS/%E8%93%9D%E5%BA%956204-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6204-2rs.html", "a": "" },
    { "s": "6205-2RS", "n": "Vòng bi 6205-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6205-2RS/%E8%93%9D%E5%BA%956205-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6205-2rs.html", "a": "" },
    { "s": "6300-2RS", "n": "Vòng bi 6300-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6300-2RS/%E8%93%9D%E5%BA%956300-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6300-2rs.html", "a": "" },
    { "s": "6301-2RS", "n": "Vòng bi 6301-2RS", "t": "Vòng bi / bạc đạn", "c": "vongbi", "i": "/images/shipment%20picture/Bearings/6301-2RS/%E8%93%9D%E5%BA%956301-2RS.jpg", "u": "/san-pham/cworks/vong-bi-bac-dan-6301-2rs.html", "a": "" },
    { "s": "ABL2012-2013", "n": "Bố thắng ABL2012-2013 (mới) - LEAD 125 - VISION", "t": "Bố thắng / má phanh", "c": "maphanh", "i": "/images/shipment%20picture/Brake%20pad/ABL2012-2013%20(moi),LEAD%20125,%20VISION/%E8%93%9D%E5%BA%95ABL2012-2013%20(moi).jpg", "u": "/san-pham/cworks/bo-thang-abl2012-2013-lead-125-vision.html", "a": "Bố thắng ABL2012-2013 (mới) dành cho LEAD 125 và VISION" },
    { "s": "RS-FUTURE-FU-NEO", "n": "Bố thắng RS FUTURE, FU NEO", "t": "Bố thắng / má phanh", "c": "maphanh", "i": "/images/shipment%20picture/Brake%20pad/RS%20FUTURE,FU%20NEO/%E8%93%9D%E5%BA%95RS%20FUTURE,FU%20NEO.jpg", "u": "/san-pham/cworks/bo-thang-rs-future-fu-neo.html", "a": "" },
    { "s": "RSX-WAVE110-FUTURE-FI-WINNER-TRUOC", "n": "Bố thắng RSX WAVE110, FUTURE FI, WINNER (Truoc)", "t": "Bố thắng / má phanh", "c": "maphanh", "i": "/images/shipment%20picture/Brake%20pad/RSX%20WAVE110,FUTURE%20FI,WINNER%20(Truoc)/%E8%93%9D%E5%BA%95WINNER%20(Truoc).jpg", "u": "/san-pham/cworks/bo-thang-rsx-wave110-future-fi-winner-truoc.html", "a": "" },
    { "s": "VARIO", "n": "Bố thắng Vario", "t": "Bố thắng / má phanh", "c": "maphanh", "i": "/images/shipment%20picture/Brake%20pad/VARIO/%E8%93%9D%E5%BA%95VARIO.jpg", "u": "/san-pham/cworks/bo-thang-vario.html", "a": "" },
    { "s": "WAVE-W100-FU-W100-ZX", "n": "Bố thắng WAVE(W100), FU(W100), ZX", "t": "Bố thắng / má phanh", "c": "maphanh", "i": "/images/shipment%20picture/Brake%20pad/WAVE(W100),FU(W100),ZX/%E8%93%9D%E5%BA%95WAVE(W100).jpg", "u": "/san-pham/cworks/bo-thang-wave-w100-fu-w100-zx.html", "a": "" },
    { "s": "WINNER-150-SAU", "n": "Bố thắng WINNER 150 (SAU)", "t": "Bố thắng / má phanh", "c": "maphanh", "i": "/images/shipment%20picture/Brake%20pad/WINNER%20150%20(sau)/%E8%93%9D%E5%BA%95WINNER%20150%20(sau).jpg", "u": "/san-pham/cworks/bo-thang-winner-150-sau.html", "a": "" },
    { "s": "K44", "n": "Dây curoa K44", "t": "Dây curoa xe máy", "c": "curoa", "i": "/images/shipment%20picture/Motorcycle%20Belt/K44/%E8%93%9D%E5%BA%95TT-23100-K44-V010.jpg", "u": "/san-pham/cworks/day-curoa-k44.html", "a": "" },
    { "s": "KVB", "n": "Dây curoa KVB", "t": "Dây curoa xe máy", "c": "curoa", "i": "/images/shipment%20picture/Motorcycle%20Belt/KVB/23100-KVB-901/%E8%93%9D%E5%BA%9523100-KVB-901.jpg", "u": "/san-pham/cworks/day-curoa-kvb.html", "a": "" },
    { "s": "SN-10W40-MB-4T-1L", "n": "SN 10W40 MB 4T 1L", "t": "Dầu nhớt xe máy", "c": "nhot", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/motorcycle%20oil/SN%2010W40%20MB%204T%201L/%E8%93%9D%E5%BA%95SN%2010W40%20MB%204T%201L.jpg", "u": "/san-pham/cworks/sn-10w40-mb-4t-1l.html", "a": "Dầu nhớt SN 10W40 MB 4T 1L" },
    { "s": "SN-10W40-MB-4T-800ML", "n": "SN 10W40 MB 4T 800ML", "t": "Dầu nhớt xe máy", "c": "nhot", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/motorcycle%20oil/SN%2010W40%20MB%204T%20800ML/%E8%93%9D%E5%BA%95SN%2010W40%20MB%204T%20800ML.jpg", "u": "/san-pham/cworks/sn-10w40-mb-4t-800ml.html", "a": "Dầu nhớt SN 10W40 MB 4T 800ML" },
    { "s": "SN-10W50-MB-4T-1L", "n": "SN 10W50 MB 4T 1L", "t": "Dầu nhớt xe máy", "c": "nhot", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/motorcycle%20oil/SN%2010W50%20MB%204T%201L/%E8%93%9D%E5%BA%95SN%2010W50%20MB%204T%201L.jpg", "u": "/san-pham/cworks/sn-10w50-mb-4t-1l.html", "a": "Dầu nhớt SN 10W50 MB 4T 1L" },
    { "s": "SN-10W50-MB-4T-800ML", "n": "SN 10W50 MB 4T 800ML", "t": "Dầu nhớt xe máy", "c": "nhot", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/motorcycle%20oil/SN%2010W50%20MB%204T%20800ML/%E8%93%9D%E5%BA%95SN%2010W50%20MB%204T%20800ML.jpg", "u": "/san-pham/cworks/sn-10w50-mb-4t-800ml.html", "a": "Dầu nhớt SN 10W50 MB 4T 800ML" },
    { "s": "TCB7R-9", "n": "Bugi TCB7R-9", "t": "Bugi / Spark Plug", "c": "bugi", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/spark%20plug/TCB7R-9/%E8%93%9D%E5%BA%95TCB7R-9.jpg", "u": "/san-pham/cworks/bugi-tcb7r-9.html", "a": "Bugi TCB7R-9 CWORKS" },
    { "s": "TCB6R", "n": "Bugi TCB6R", "t": "Bugi / Spark Plug", "c": "bugi", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/spark%20plug/TCB6R/%E8%93%9D%E5%BA%95TCB6R.jpg", "u": "/san-pham/cworks/bugi-tcb6r.html", "a": "Bugi TCB6R CWORKS" },
    { "s": "TCA6", "n": "Bugi TCA6", "t": "Bugi / Spark Plug", "c": "bugi", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/spark%20plug/TCA6/%E8%93%9D%E5%BA%95TCA6.jpg", "u": "/san-pham/cworks/bugi-tca6.html", "a": "Bugi TCA6 CWORKS" },
    { "s": "TCB8R", "n": "Bugi TCB8R", "t": "Bugi / Spark Plug", "c": "bugi", "i": "/images/shipment%20picture/spark%20plug%20and%20motorcycle%20oil%20picture/spark%20plug/TCB8R/%E8%93%9D%E5%BA%95TCB8R.jpg", "u": "/san-pham/cworks/bugi-tcb8r.html", "a": "Bugi TCB8R CWORKS" },
    { "s": "NUOC-LAM-MAT-XANH-5-DO-1L", "n": "Nước làm mát 绿色 -5℃ 1L", "t": "Nước làm mát", "c": "nuocmat", "i": "/images/shipment%20picture/Long%20Life%20coolant/%E7%BB%BF%E8%89%B2%20-5%E2%84%83%201L/%E7%BB%BF%E8%89%B2%20-5%E2%84%83%201L%E8%93%9D%E5%BA%95.jpg", "u": "/san-pham/cworks/nuoc-lam-mat-xanh-5-do-1l.html", "a": "" }
];