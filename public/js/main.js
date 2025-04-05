// Mendapatkan lebar layar dan tinggi layar

const lebarLayar = window.innerWidth;
const tinggiLayar = window.innerHeight;

document.documentElement.style.setProperty('--lebar-layar', lebarLayar + 'px');
document.documentElement.style.setProperty('--tinggi-layar', tinggiLayar + 'px');

// Untuk scrolling Navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});

// Hamburger Menu Active

let hamburgerMenu = document.querySelector('.hamburger-menu');
let mobileNavbar = document.querySelector('.mobile-navbar');

hamburgerMenu.onclick = function() {
  mobileNavbar.classList.toggle('active');
}