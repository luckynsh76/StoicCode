document.addEventListener("DOMContentLoaded", function () {
  // Optional welcome alert
  // alert("Welcome to the Stoic Website!");

  // Dark mode toggle (if used)
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      menu.classList.toggle("show");
    });
  }
});
