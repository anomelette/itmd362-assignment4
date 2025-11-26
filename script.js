// Interaction 1: Holiday popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("holiday-popup");
  const closeBtn = document.getElementById("close-popup");

  // Show popup when page loads
  popup.classList.remove("hidden");

  // Close when clicking button
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});

// Interaction 2: Image Carousel
const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = images[0].clientWidth;
  track.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Previous button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Auto-slide every 8 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 8000);

// Adjust slide width on window resize
window.addEventListener("resize", updateCarousel);
