function chonSanPham(ten) {
    document.getElementById("sanpham").value = ten;
}

function datHang(e) {
    e.preventDefault();

    let ten = document.getElementById("ten").value;
    let sdt = document.getElementById("sdt").value;
    let sp = document.getElementById("sanpham").value;

    alert("Đặt hàng thành công!\nTên: " + ten + "\nSĐT: " + sdt + "\nSản phẩm: " + sp);
}
let images = [
    "img/T shirt1.png",
    "img/T shirt2.png",
    "img/T shirt3.png",
    "img/pant1.png",
    "img/pant2.png",
    "img/pant3.png",
];

let index = 0;

function showSlide() {
    document.getElementById("slide").src = images[index];
}

// AUTO CHẠY
setInterval(function() {
    index++;
    if (index >= images.length) index = 0;
    showSlide();
}, 3000); // 3000 = 3 giây