// Grab the elements from the DOM
const countrySelector = document.getElementById("countrySelector");
const countryList = document.getElementById("countryList");
const selectedCountryText = document.getElementById("selectedCountry");

// 1. Toggle the dropdown when the "Select Country" button is clicked
countrySelector.addEventListener("click", function (event) {
  // Prevent this click from instantly triggering the document listener below
  event.stopPropagation();
  countryList.classList.toggle("show");
});

// 2. Handle what happens when a country is clicked
countryList.addEventListener("click", function (event) {
  // Check if what was clicked was actually an <li> element
  if (event.target.tagName === "LI") {
    // Change the text in the button to the selected country
    selectedCountryText.textContent = event.target.textContent;
    // Hide the dropdown list
    countryList.classList.remove("show");
  }
});

// 3. Close the dropdown if the user clicks anywhere else on the page
document.addEventListener("click", function (event) {
  if (
    !countrySelector.contains(event.target) &&
    !countryList.contains(event.target)
  ) {
    countryList.classList.remove("show");
  }
});

/* =========================================
   1. TRACK ORDER MODAL & MATH CAPTCHA
========================================= */
const trackBtn = document.querySelector(".track-order-link"); // Grabs the link in your topbar
const modal = document.getElementById("trackModal");
const closeBtn = document.getElementById("closeModalBtn");
const mathQuestion = document.getElementById("mathQuestion");

// Function to generate random math problem
function generateMath() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  mathQuestion.textContent = `${num1} + ${num2} =`;
  // In a real app, you'd store num1 + num2 in a variable to validate the user's answer
}

// Open Modal
trackBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateMath(); // Generate new math problem every time it opens
  modal.classList.add("show");
});

// Close Modal (X button)
closeBtn.addEventListener("click", () => modal.classList.remove("show"));

// Close Modal (Clicking outside the box)
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

/* =========================================
   2. DRAGGABLE AUTO-SCROLL CAROUSEL
========================================= */
const track = document.getElementById("servicesTrack");
let isDown = false;
let startX;
let scrollLeft;
let autoScrollInterval;

// Auto-Scroll Logic
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    // Scroll right by 2 pixels every 30 milliseconds
    track.scrollLeft += 2;

    // If we hit the end, smoothly scroll back to the beginning
    if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
      setTimeout(() => {
        track.scrollLeft = 0;
      }, 1000);
    }
  }, 30);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Start scrolling when page loads
startAutoScroll();

// Mouse Dragging Logic
track.addEventListener("mousedown", (e) => {
  isDown = true;
  stopAutoScroll(); // Pause auto-scroll while user is dragging
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener("mouseleave", () => {
  isDown = false;
  startAutoScroll(); // Resume if mouse leaves
});

track.addEventListener("mouseup", () => {
  isDown = false;
  startAutoScroll(); // Resume when user lets go
});

track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2; // Scroll-fast multiplier
  track.scrollLeft = scrollLeft - walk;
});

/* =========================================
   TRANSPARENT TO SOLID NAVBAR
========================================= */
const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", () => {
  // If the user scrolls down more than 50 pixels...
  if (window.scrollY > 50) {
    topbar.classList.add("scrolled"); // Turn it white
  } else {
    topbar.classList.remove("scrolled"); // Make it transparent again
  }
});
