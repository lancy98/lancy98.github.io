const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
