let navbar = false;

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 800) {
    document.getElementById("sidebar").style.display = "block";
  } else if (window.innerWidth < 800) {
    document.getElementById("sidebar").style.display = "none";
  }
});

function funnnction() {
  document.getElementById("sidebar").style.display = "block";
  navbar = true;
}

function test2() {
  if (navbar != false) {
    document.getElementById("sidebar").style.display = "none";
  }
}
