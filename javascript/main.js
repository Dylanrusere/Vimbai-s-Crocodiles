// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Ham Menu
const hamMenu = document.querySelector(".menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});

// Pre-Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  loader.classList.add("preloader_hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
});

// Hero Section Carousel
const heroItems = document.querySelectorAll('.hero-item');
const heroControls = document.querySelectorAll('.hero-controls button');
let currentIndex = 0;

    function showHeroItem(index) {
      heroItems.forEach((item, i) => {
        item.classList.toggle('active_hero', i === index);
      });

      heroControls.forEach((button, i) => {
        button.classList.toggle('active_hero', i === index);
      });
    }

    function autoRotateHero() {
      currentIndex = (currentIndex + 1) % heroItems.length;
      showHeroItem(currentIndex);
    }

    heroControls.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentIndex = index;
        showHeroItem(currentIndex);
      });
    });

    setInterval(autoRotateHero, 9000);

// Slider
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");
var carouselContainer = document.querySelector(".image_slider");
let intervalId;

function changeSlide(newIndex = index) {
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }

  if (newIndex > slides.length - 1) {
    newIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active_dot");
  }

  slides[newIndex].style.display = "block";
  dot[newIndex].classList.add("active_dot");

  index = newIndex;
}

function startCarousel() {
  intervalId = setInterval(function() {
    changeSlide(++index);
  }, 4000);
}

function pauseCarousel() {
  clearInterval(intervalId);
}

dot.forEach((dotElement, dotIndex) => {
  dotElement.addEventListener("click", () => {
    changeSlide(dotIndex);
  });
});

carouselContainer.addEventListener("mouseenter", pauseCarousel);
carouselContainer.addEventListener("mouseleave", startCarousel);

startCarousel();