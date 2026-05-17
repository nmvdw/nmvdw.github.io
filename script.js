document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".top-menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
