var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var currentSlide = 0;

showSlide(currentSlide);

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function changeSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}
