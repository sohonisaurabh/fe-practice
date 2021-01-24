import "./star-rating.js";

window.addEventListener("DOMContentLoaded", () => {
  const starRatingForm = document.querySelector("#starRatingForm");

  starRatingForm.addEventListener("submit", (event) => {
    console.log(event.target.rating.value);
    event.preventDefault();
  });
});
