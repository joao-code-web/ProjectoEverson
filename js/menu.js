const button = document.querySelector(".button-mobile i");
const nav = document.querySelector(".links nav");

button.addEventListener("click", () => {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});
