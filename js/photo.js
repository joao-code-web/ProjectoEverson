const photos = document.querySelectorAll(".photos-single");
const bigImg = document.querySelector(".imgBig");
const imgs = document.querySelector(".img");
const body = document.querySelector("body");

photos.forEach((img) => {
  img.addEventListener("click", () => {
    bigImg.style.display = "block";
    imgs.innerHTML = img.innerHTML;
  });
});

body.addEventListener("dblclick", () => {
  if (bigImg.style.display === "block") {
    bigImg.style.display = "none";
  }
});
