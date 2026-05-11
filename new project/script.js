// 1. Find the elements in your HTML
const menuBtn = document.querySelector(".menubtn");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay"); // Added the overlay

const profileBtn = document.getElementById("profile-btn");
const profileDropdown = document.getElementById("profile-dropdown");

// --- HAMBURGER MENU LOGIC ---
if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    sidebar.classList.toggle("expanded");

    // Show the dark overlay if we are on a mobile-sized screen
    if (window.innerWidth <= 768 && sidebarOverlay) {
      sidebarOverlay.classList.toggle("show");
    }
  });
}

// Click the dark overlay to close the mobile menu
if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.remove("expanded");
    sidebarOverlay.classList.remove("show");
  });
}

// --- PROFILE DROPDOWN LOGIC ---
if (profileBtn && profileDropdown) {
  profileBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    profileDropdown.classList.toggle("show");
  });
}

// --- CLOSE MENUS WHEN CLICKING OUTSIDE ---
document.addEventListener("click", function (event) {
  // Close profile dropdown
  if (
    profileDropdown &&
    !profileDropdown.contains(event.target) &&
    !profileBtn.contains(event.target)
  ) {
    profileDropdown.classList.remove("show");
  }
});
