function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var reveals1 = document.querySelectorAll(".reveal1");
  var reveals2 = document.querySelectorAll(".reveal2");
  var reveals3 = document.querySelectorAll(".reveal3");
  var reveals4 = document.querySelectorAll(".reveal4");

  for (var i = 0; i < reveals.length; i++) {
    handleReveal(reveals[i], "active");
  }

  for (var j = 0; j < reveals1.length; j++) {
    handleReveal(reveals1[j], "active1");
  }

  for (var k = 0; k < reveals2.length; k++) {
    handleReveal(reveals2[k], "active2");
  }

  for (var l = 0; l < reveals3.length; l++) {
    handleReveal(reveals3[l], "active3");
  }

  for (var m = 0; m < reveals4.length; m++) {
    handleReveal(reveals4[m], "active4");
  }
}

function handleReveal(element, className) {
  var windowHeight = window.innerHeight;
  var elementTop = element.getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

window.addEventListener("scroll", reveal);

window.addEventListener("scroll", function () {
  var header = document.querySelector(".container-section header");
  if (window.scrollY > 0) {
    header.classList.add("with-shadow");
  } else {
    header.classList.remove("with-shadow");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelector(".slides");
  const slideWidth = slider.clientWidth;
  let slideIndex = 0;
  let bullets = document.querySelectorAll(".bullet");

  function nextSlide() {
    slideIndex++;
    if (slideIndex === slides.children.length) {
      slideIndex = 0;
    }
    updateBullets();
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  function updateBullets() {
    bullets.forEach((bullet, index) => {
      if (index === slideIndex) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  }

  bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
      slideIndex = parseInt(bullet.getAttribute("data-index"));
      updateBullets();
      slides.style.transition = "transform 0.5s ease-in-out";
      slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
  });

  setInterval(nextSlide, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".container-section header .menu");
  menu.classList.remove("open");
});

const toggle = document.getElementById("toggle");
const menu = document.querySelector(".container-section header .menu");

function toggleMenu() {
  toggle.classList.toggle("open");
  menu.classList.toggle("open");
}
