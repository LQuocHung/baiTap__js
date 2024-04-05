function sayHi(user) {
  console.log("hello " + user);
}
sayHi("Hung");
sayHi("nguyen");

function addTwoNumber(a, b) {
  const tong = a + b;

  return tong;
}
// addTwoNumber(2 , 5);
// addTwoNumber(6 , 5);

const sum = addTwoNumber(5, 10) * 2;
console.log(sum);
////

function getEle(id) {
  return document.getElementById(id);
}

function tinhDTB(toan, ly, hoa) {
  const dtb = (toan + ly + hoa) / 3;
  return dtb;
}

function xepLoai(dtb) {
  let loai = "";
  if (dtb >= 8 && dtb <= 10) {
    loai = "gioi";
  } else if (dtb >= 7 && dtb < 8) {
    loai = "Kha";
  } else if (dtb < 7 && dtb >= 5) {
    loai = "trung binh";
  } else if (dtb < 5) {
    loai = "yeu";
  }

  return loai;
}

const btnXepLoai = getEle("btnXepLoai");
btnXepLoai.onclick = function () {
  const txtDiemToan = getEle("txtDiemToan").value * 1;
  const txtDiemLy = getEle("txtDiemLy").value * 1;
  const txtDiemHoa = getEle("txtDiemHoa").value * 1;

  const dtb = tinhDTB(txtDiemToan, txtDiemLy, txtDiemHoa);
  console.log(dtb);

  const loai = xepLoai(dtb);

  let result =
    "<div class='alert alert-danger'>  Tong Diem Trung Binh  " +
    dtb +
    "</br>" +
    "Xep Loai " +
    loai +
    "</div>";
  getEle("txtXepLoai").innerHTML = result;
};

//////////

function tinhLuongLon40(txtSoGioLam, luong, heSo) {
  const tongLuong = (txtSoGioLam - 40) * luong * heSo + 40 * luong;

  return tongLuong;
}

function tinhLuongBe40(txtSoGioLam, luong) {
  const tongLuong = txtSoGioLam * luong;

  return tongLuong;
}

getEle("btnTongLuong").onclick = function () {
  const txtSoGioLam = getEle("txtSoGioLam").value * 1;
  const luong = 100000;
  const heSo = 1.5;
  let tongTien = 0;

  const tongLuong = tinhLuongLon40(txtSoGioLam, luong, heSo);
  console.log(tongLuong);

  if (txtSoGioLam < 40) {
    tongTien = tinhLuongBe40(txtSoGioLam, luong);
  } else {
    tongTien = tinhLuongLon40(txtSoGioLam, luong, heSo);
  }

  let result =
    "<div class='alert alert-danger'>Tong Luong Nhan Vien La : " +
    tongTien +
    "</div>";

  getEle("txtTongLuong").innerHTML = result;
};

////////////

function tongGiaBeHon49(txtSoLuong, txtGiaThanh) {
  tongGia = txtSoLuong * txtGiaThanh;

  return tongGia;
}

function tongGiaLonHon50(txtSoLuong, txtGiaThanh) {
  tongGia = 49 * txtGiaThanh + ((txtSoLuong - 49) * txtGiaThanh * 92) / 100;

  return tongGia;
}

function tongGiaLonHon101(txtSoLuong, txtGiaThanh) {
  tongGia =
    ((txtSoLuong - 100) * txtGiaThanh * 88) / 100 +
    (51 * txtGiaThanh * 92) / 100 +
    49 * txtGiaThanh;

  return tongGia;
}

getEle("btnTongGia").onclick = function () {
  const txtSoLuong = getEle("txtSoLuong").value * 1;
  const txtGiaThanh = getEle("txtGiaThanh").value * 1;
  const txtTenSanPham = getEle("txtTenSanPham").value;

  if (txtSoLuong <= 49 && txtSoLuong > 0) {
    tongGia = tongGiaBeHon49(txtSoLuong, txtGiaThanh);
  } else if (txtSoLuong >= 50 && txtSoLuong <= 100) {
    tongGia = tongGiaLonHon50(txtSoLuong, txtGiaThanh);
  } else if (txtSoLuong >= 101) {
    tongGia = tongGiaLonHon101(txtSoLuong, txtGiaThanh);
  } else {
    tongGia = "soLuong Kh hop le";
    alert("soLuong Kh hop le");
  }

  let result =
    "<div class='alert alert-danger'> Ten San Pham : " +
    txtTenSanPham +
    "</br> So Luong Mua : " +
    txtSoLuong +
    "</br>  Tong Gia Tien : " +
    tongGia +
    "</div>";
  getEle("txtTongGia").innerHTML = result;
};

///////

function tongTienLai(phanTram, tongTienTra) {
  tongTien = (phanTram / 100) * tongTienTra;
  return tongTien;
}

getEle("btnTongTien").onclick = function () {
  const txtNumber2 = getEle("txtNumber2").value * 1;
  const txtNumber3 = getEle("txtNumber3").value * 1;
  const phanTram = 1.5;

  const tongTienTra = txtNumber2 - txtNumber3;

  if (tongTienTra > 0) {
    tongTien = tongTienLai(tongTienTra, phanTram);
  }


  let result =
    "<div class='alert alert-danger'> Tiền Lãi Phải Trả Là : " +
    tongTien +
    " </div>";
  getEle("txtTongTien").innerHTML = result;
};
