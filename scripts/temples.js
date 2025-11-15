const hamburgerMenu = document.querySelector('.hamburger-menu');
const display = document.querySelector(".display")
const shows = document.querySelector(".show");

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  display.classList.toggle('display');
  shows.classList.toggle("show");
  
});