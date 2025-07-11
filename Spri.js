function nhan() {
 const a = document.getElementById(
   "1")
  .checked;
 const b = document.getElementById(
   "2")
  .checked;
 const c = document.getElementById(
   "3")
  .checked;
 if (a == true && b == true && c ==
  false) {
  document.getElementById(
    "ketqua")
   .innerHTML =
   "đúng rồi đó anh giỏi quá!(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤";
  document.getElementById("qua")
   .innerHTML = "bánh cho anh neè"
  document.getElementById("ketqua")
   .style.color = "green";
  document.getElementById("anh")
   .src =
   "https://i.imgur.com/fQBB9dx.jpeg"
 } else if (a == false && b ==
  false && c == false) {
  document.getElementById("ketqua")
   .innerHTML =
   "Ủa anh Tick vô mục coi =⁠_⁠=";
 } else if (a == true && b ==
  true && c ==
  true) {
  document.getElementById("ketqua")
   .innerHTML =
   "Gì vậy anh??, chọn lại đi hai cái thôi 😾😾";
  document.getElementById("anh")
   .src =
   "https://i.imgur.com/EwkNA4O.jpeg";
 } else {
  document.getElementById("ketqua")
   .innerHTML =
   "Nào chọn đúng đi anh 😭";
  document.getElementById("ketqua")
   .style.color = "red";
  document.getElementById("anh")
   .src =
   "https://i.imgur.com/52KlLpC.jpeg";
 }
}
