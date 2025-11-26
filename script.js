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

// Interaction 3: User info prompt
// --------------------------
// Adopt Us Contact Prompt
// --------------------------
document.addEventListener("DOMContentLoaded", function () {

    // OPEN MODAL
    const adoptBtn = document.getElementById("adopt-btn");
    const adoptModal = document.getElementById("adopt-modal");
    const closeAdopt = document.getElementById("close-adopt-modal");

    adoptBtn.addEventListener("click", function (event) {
        event.preventDefault();
        adoptModal.style.display = "flex";
    });

    // CLOSE MODAL
    closeAdopt.addEventListener("click", function () {
        adoptModal.style.display = "none";
    });

    // SUBMIT FORM
    document.getElementById("adopt-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("adopt-name").value.trim();
        const contact = document.getElementById("adopt-contact").value.trim();

        if (!name || !contact) {
            alert("Please fill out all fields.");
            return;
        }

        alert(`Thanks, ${name}! We'll reach out to you at: ${contact}`);
        adoptModal.style.display = "none";
    });

});

//document.addEventListener("DOMContentLoaded", function () {

//    const adoptBtn = document.getElementById("adopt-btn");

//    if (adoptBtn) {
//        adoptBtn.addEventListener("click", function(event) {
//            event.preventDefault();

//            const name = prompt("Please enter your full name:");
//            if (!name) {
//                alert("Changed your mind? No worries!");
//                return;
//            }

//            const contact = prompt("Please enter your email or phone number so we can send adoption updates:");
//            if (!contact) {
//                alert("Changed your mind? No worries!");
//                return;
//            }

//            alert("Thanks, " + name + "! We'll reach out to you at: " + contact);
//        });
//    } else {
//        console.error("Adopt button not found!");
//    }

//});

