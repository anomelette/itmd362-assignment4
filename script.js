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

// Auto-slide the images every 8 seconds (8000ms)
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 8000);

window.addEventListener("resize", updateCarousel);

// Interaction 3: Adoption contact prompt
document.addEventListener("DOMContentLoaded", function () {
    const adoptBtn = document.getElementById("adopt-btn");
    const adoptModal = document.getElementById("adopt-modal");
    const closeAdopt = document.getElementById("close-adopt-modal");
});

    // open prompt when button is clicked
    adoptBtn.addEventListener("click", function (event) {
        event.preventDefault();
        adoptModal.style.display = "flex";
    });

    // close prompt with close button
    closeAdopt.addEventListener("click", function () {
        adoptModal.style.display = "none";
    });

    // Contact form submission
    document.getElementById("adopt-form").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const name = document.getElementById("adopt-name").value.trim();
        const contact = document.getElementById("adopt-contact").value.trim();
    
        if (!name || !contact) {
            alert("Please fill out all fields.");
            return;
        }
    
        document.getElementById("adopt-form").reset();
    });

