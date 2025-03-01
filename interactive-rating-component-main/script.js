var ratingButtons = document.querySelectorAll(".rating-button");
var submitButton = document.querySelector(".submit-button");
let rating = 0;

if (!ratingButtons || ratingButtons.length < 1) {
  console.log("No rating buttons found.");
} else {
  ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // reset all buttons to inactive state
      ratingButtons.forEach(function (button) {
        button.classList.remove("active");
      });
      // activate the clicked button
      this.classList.add("active");
      rating = this.textContent;
    });
  });
}

if (!submitButton) {
  console.log("No submit button found.");
} else {
  submitButton.addEventListener("click", function () {
    if (rating === 0) {
      alert("Please select a rating before submitting.");
    } else {
      document.querySelector(".rating-number").textContent = rating; // update the rating number
      document.querySelector(".rating-card").style.display = "none"; // hide the rating card
      document.querySelector(".submitted").style.display = "flex"; // show the submitted card
    }
  });
}
