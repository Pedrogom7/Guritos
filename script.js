// Carousel
const wrapper = document.querySelector('.carousel-wrapper');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const carousel = document.querySelector('.carousel');

let currentIndex = 0;
let autoSlideInterval;
let touchStartX = 0;
let touchEndX = 0;

if (wrapper && images.length > 0 && prevBtn && nextBtn && carousel) {
  function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    wrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(showNextImage, 7000);
  }

  nextBtn.addEventListener('click', () => {
    showNextImage();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    showPrevImage();
    resetAutoSlide();
  });

  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  carousel.addEventListener('mouseleave', () => resetAutoSlide());

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      showNextImage();
      resetAutoSlide();
    }
    if (touchEndX - touchStartX > 50) {
      showPrevImage();
      resetAutoSlide();
    }
  });

  autoSlideInterval = setInterval(showNextImage, 7000);
  updateCarousel();
  window.addEventListener('resize', updateCarousel);
}

// Hamburger Menu (sempre executa)
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const body = document.body;

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      body.classList.toggle("nav-open");
    });
  }
});