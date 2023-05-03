let navbar = false;

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 800) {
    document.getElementById("sidebar").style.transform = "translateX(0%)";
  } else if (window.innerWidth < 800) {
    document.getElementById("sidebar").style.transform = "translateX(-100%)";
  }
});

function funnnction() {
  document.getElementById("sidebar").style.transform = "translateX(0%)";
  navbar = true;
}

function test2() {
  if (navbar != false) {
    document.getElementById("sidebar").style.transform = "translateX(-100%)";
  }
}
