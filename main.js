// == phép so sánh bẳng (chỉ ss giá trị)
const num1 = 5;
const num2 = "5";
console.log(num1 == num2);

// === phép so sánh bằng (ss giá trị và kiểu dữ liệu)
const num3 = 9;
const num4 = "9";
console.log(num3 === num4);

// >
const num5 = 5;
const num6 = 7;
console.log(num5 > num6); //

// >=
const num7 = 9;
const num8 = 9;
console.log(num7 >= num8);

// < / <=

// != so sánh khác

const num9 = 9;
const num10 = 8;
console.log(num9 != num10);

// !== ss khác nhau giá trị vs kiểu dữ liệu
const num11 = 5;
const num12 = "5";
console.log(num11 !== num12);

// ! (phủ định)

const num13 = true;
console.log(!num13);

// giá trị rỗng / giá trị null / giá trị undefined ->falsy(flase)

let address = "d";
console.log(!address);

let age = null;
console.log(!!age);

//biểu thức
//&&
// ||

const bt1 = 5 > 4;

const bt2 = 4 < 1;
const bt3 = 9 != 5;
console.log(bt1 && bt2 && bt3);

const bt4 = 1 > 3;
const bt5 = 5 > 1;
const bt6 = 9 < 5;
console.log(bt4 || bt5 || (bt6 && bt1));

// câu điều kiện

if (bt5) {
  console.log("dk dung");
}

const btnChuyenSo = document.getElementById("btnChuyenSo");
btnChuyenSo.onclick = function () {
  let txtNumber1 = document.getElementById("txtNumber1").value * 1;
  console.log(txtNumber1);

  if (txtNumber1 < 0) {
    txtNumber1 = -txtNumber1;
  }
  let result =
    "<div class='alert alert-danger'>Kết quả là: " + txtNumber1 + "</div>";

  document.getElementById("txtChuyenSo").innerHTML = result;
};

const btnTongTien = document.getElementById("btnTongTien");
btnTongTien.onclick = function () {
  const txtNumber2 = document.getElementById("txtNumber2").value * 1;
  console.log(txtNumber2);

  const txtNumber3 = document.getElementById("txtNumber3").value * 1;
  console.log(txtNumber3);

  const tongTienTra = txtNumber2 - txtNumber3;
  let tongTien = 0;
  if (tongTienTra > 0) {
    tongTien = (1.5 / 100) * tongTienTra;
  }

  let result =
    "<div class='alert alert-danger'> Tiền Lãi Phải Trả Là : " +
    tongTien +
    " </div>";
  document.getElementById("txtTongTien").innerHTML = result;
};

if (4 !== 4) {
  console.log("Hanh dong 1");
} else {
  console.log("Hanh dong 2 ");
}

// Tim so lon nhat

const btnTimSo = document.getElementById("btnTimSo");
btnTimSo.onclick = function () {
  const tntSoN = document.getElementById("tntSoN").value * 1;

  const tntSoX = document.getElementById("tntSoX").value * 1;

  let soLonNhat;

  if (tntSoN > tntSoX) {
    soLonNhat = tntSoN;
  } else {
    soLonNhat = tntSoX;
  }

  let result =
    "<div class='alert alert-danger'>So Lon Nhat La : " + soLonNhat + " </div>";
  document.getElementById("txtTongSo").innerHTML = result;
};

// Tim so chan le

const bnbTongSo = document.getElementById("bnbTongSo");
bnbTongSo.onclick = function () {
  const thtSoX = document.getElementById("thtSoX").value * 1;

  let content = "";

  if (thtSoX % 2 === 0) {
    content = "So " + thtSoX + " la so Chan";
  } else {
    content = "So " + thtSoX + " la so Le";
  }

  let result = "<div class='alert alert-danger'>" + content + " </div>";
  document.getElementById("tntTongSo").innerHTML = result;
};

// tinh luong nhan vien

const btnTongLuong = document.getElementById("btnTongLuong");
btnTongLuong.onclick = function () {
  const txtSoGioLam = document.getElementById("txtSoGioLam").value * 1;
  console.log(txtSoGioLam);

  let tongLuong;
  const soTienLuong = 100.0;

  if (txtSoGioLam <= 40) {
    tongLuong = txtSoGioLam * soTienLuong;
    console.log(tongLuong);
  } else {
    tongLuong = (txtSoGioLam - 40) * soTienLuong * 1.5 + 40 * soTienLuong;
    console.log(tongLuong);
  }

  let result =
    "<div class='alert alert-danger'> So Luong Nhan Vien Lam La : " +
    tongLuong +
    "</div>";
  document.getElementById("txtTongLuong").innerHTML = result;
};

/**
 * if else if
 */

const numberProvide = 32;
if (numberProvide === 1) {
  console.log("Day la so 1");
} else if (numberProvide === 2) {
  console.log(" day la so 2");
} else if (numberProvide === 3) {
  console.log(" day la so 3");
} else {
  console.log("kh biet doc");
}

const btnXepLoai = document.getElementById("btnXepLoai");
btnXepLoai.onclick = function () {
  const txtDiemToan = document.getElementById("txtDiemToan").value * 1;
  console.log(txtDiemToan);
  const txtDiemLy = document.getElementById("txtDiemLy").value * 1;
  console.log(txtDiemLy);
  const txtDiemHoa = document.getElementById("txtDiemHoa").value * 1;
  console.log(txtDiemHoa);

  let diemTB;
  let xepLoai = "";
  diemTB = (txtDiemToan + txtDiemLy + txtDiemHoa) / 3;
  console.log(diemTB);

  if (diemTB >= 8 && diemTB <= 10) {
    xepLoai = "Hoc Sinh Gioi";
  } else if (diemTB >= 7 && diemTB < 8) {
    xepLoai = "Hoc Sinh Kha";
  } else if (diemTB >= 5 && diemTB < 7) {
    xepLoai = "Hoc Sinh Trung Binh";
  } else if (diemTB < 5) {
    xepLoai = "Hoc Sinh Yeu";
  } else {
    xepLoai = "Khong Hop Le";
    alert("Khong Hop Le");
  }

  let result =
    "<div class='alert alert-danger'>  tong diem trung binh : " +
    diemTB +
    "   Xep Loai :" +
    xepLoai +
    "</div>";
  document.getElementById("txtXepLoai").innerHTML = result;
};

/**
 *
 * donGia = 10.000
 *  soLuong 1 -> 49 0%  soLuong *donGia
 *
 * 50 -> 100 -8%
 *
 * ( 49*donGia) + (soLuong-49)* 8/100
 *
 * 101 tro len -12%
 * (soLuong - 100)*12/100 + (51 * 8/100) + 49*donGia
 */

const btnTongGia = document.getElementById("btnTongGia");
btnTongGia.onclick = function () {
  const txtTenSanPham = document.getElementById("txtTenSanPham").value;
  console.log(txtTenSanPham);

  const txtSoLuong = document.getElementById("txtSoLuong").value * 1;
  console.log(txtSoLuong);

  const txtGiaThanh = document.getElementById("txtGiaThanh").value * 1;
  console.log(txtGiaThanh);

  let tongGia = 0;

  if (txtSoLuong <= 49 && txtSoLuong > 0) {
    tongGia = txtSoLuong * txtGiaThanh;
    console.log(tongGia);
  } else if (txtSoLuong >= 50 && txtSoLuong <= 100) {
    tongGia = 49 * txtGiaThanh + ((txtSoLuong - 49) * txtGiaThanh * 92) / 100;
    console.log(tongGia);
  } else if (txtSoLuong >= 101) {
    tongGia =
      ((txtSoLuong - 100) * txtGiaThanh * 88) / 100 +
      (51 * txtGiaThanh * 92) / 100 +
      49 * txtGiaThanh;
    console.log(tongGia);
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
  document.getElementById("txtTongGia").innerHTML = result;
};

function whatWeDo() {
  const today = 8;

  // if (today == 7) {
  //   console.log("di hoc");
  // } else {
  //   console.log("di choi");
  // }

  // toán tử 3 ngôi

  today == 7 || today == 8 ? console.log("di hoc") : console.log("di choi");
}

whatWeDo();

function demoSwitchCase() {
  const so = 1;

  switch (so) {
    case 1:
      console.log("day la so 1");
      break; //đừng
    case 2:
      console.log("day la so 2");
      break;

    case 3:
      console.log("day la so 3");
      break;

    case "a":
      console.log("day la chu a");
      break;
    default:
      console.log("kh biet doc");
      break;
  }
}
demoSwitchCase();
