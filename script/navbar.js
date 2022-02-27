window.onscroll = function () {
  controlNav();
};

let l = document.querySelector("#second");
let limit = l.offsetTop;
function controlNav() {
  if (window.pageYOffset >= limit) {
    l.style.positon = "fixed";
    l.style.top = "0";
    l.style.left = "0";
  }
}
