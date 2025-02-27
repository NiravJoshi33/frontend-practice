var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var plusImag = this.querySelector(".plus");
    var minusImag = this.querySelector(".minus");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      plusImag.style.display = "block";
      minusImag.style.display = "none";
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      plusImag.style.display = "none";
      minusImag.style.display = "block";
    }
  });
}
