const submit = document.getElementById("submit-btn");
const rate = document.getElementById("rate");
const ratingModal = document.querySelector(".rating");
const thanksModal = document.querySelector(".thanks");
const rateButtons = document.querySelectorAll(".rating__rate");

let userRate = null;
let isFocused = false;

rateButtons.forEach((e) => {
  e.addEventListener("click", () => {
    userRate = e.innerHTML;
  });
});

submit.addEventListener("click", () => {
  if (userRate) {
    rate.innerHTML = userRate;
    ratingModal.style.display = "none";
    thanksModal.style.display = "block";
  }
});
