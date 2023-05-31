const overlay = document.getElementById("overlay");
const imageContainer = document.getElementById("image-container");
const expandedImage = document.getElementById("expanded-image");
const galleryImages = document.getElementsByClassName("gallery-image");
const prevImage = document.getElementById("prev-image");
const nextImage = document.getElementById("next-image");
let currentIndex = 0;

for (let i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", function () {
    const src = this.getAttribute("src");
    expandedImage.setAttribute("src", src);
    currentIndex = i;

    overlay.style.display = "block";
    imageContainer.style.display = "flex";
  });
}

function closeExpandedImage() {
  overlay.style.display = "none";
  imageContainer.style.display = "none";
}

overlay.addEventListener("click", closeExpandedImage);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeExpandedImage();
  } else if (event.key === "ArrowLeft") {
    showPrevImage();
  } else if (event.key === "ArrowRight") {
    showNextImage();
  }
});

function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  const src = galleryImages[currentIndex].getAttribute("src");
  expandedImage.setAttribute("src", src);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  const src = galleryImages[currentIndex].getAttribute("src");
  expandedImage.setAttribute("src", src);
}

prevImage.addEventListener("click", showPrevImage);
nextImage.addEventListener("click", showNextImage);
