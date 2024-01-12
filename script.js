var openButton = document.querySelector("#mobile-menu-button");
var main = document.querySelector("#main");

var close = document.querySelector(".close");
var flag = 0;

if (flag == 0) {
  openButton.addEventListener("click", function () {
    main.classList.toggle("active");
    flag = 1;
  });
} else {
  close.addEventListener("click", function () {
    main.classList, toggle("active");
    flag = 0;
  });
}


