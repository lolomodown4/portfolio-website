var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menuBtn.onclick = function showbtn() {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "./img/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "./img/menu.png";
  }
};