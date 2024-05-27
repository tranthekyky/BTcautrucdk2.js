let thang1 = "Tháng 1";
let thang2 = "Tháng 2";
let thang3 = "Tháng 3";
let thang4 = "Tháng 4";
let thang5 = "Tháng 5";
let thang6 = "Tháng 6";
let thang7 = "Tháng 7";
let thang8 = "Tháng 8";
let thang9 = "Tháng 9";
let thang10 = "Tháng 10";
let thang11 = "Tháng 11";
let thang12 = "Tháng 12";



function countDay() {
    let month = document.getElementById("month").value;
    switch (month) {
        case thang1:
        case thang3:
        case thang5:
        case thang7:
        case thang10:
        case thang12:
            document.getElementById("result").innerHTML = month + " " + "có 31 ngày";
            break;
        case thang4:
        case thang6:
        case thang9:
        case thang11:
            document.getElementById("result").innerHTML = month + " " + "có 30 ngày";
            break;
        case thang2:
            document.getElementById("result").innerHTML = month + " " + "có 28 ngày";
            break;
        default:
            document.getElementById("result").innerHTML = "Vui lòng chọn tháng !";

    }
}