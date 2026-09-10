const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".hero .section-desc", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero-link", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".shop-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about-content .section-title", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about-content .section-desc", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about-stats", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
});

ScrollReveal().reveal(".banner-wrap p", {
  duration: 1000,
  interval: 500,
});
