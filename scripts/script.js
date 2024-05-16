// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const sectionLinks = document.querySelectorAll(".nav-links li a");

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    })
  })
});
