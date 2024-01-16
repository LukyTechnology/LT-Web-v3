
// Mobile hamburger

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
})



// Navbar

const domain = "http://localhost:4000/"

document.getElementById('index').addEventListener('click', function() {
  window.location.href = domain;
});

document.getElementById('setup').addEventListener('click', function() {
  window.location.href = domain + "setup";
});



// Footer

document.getElementById("date").innerHTML = String("Všetky práva vyhradené. © " + new Date().getFullYear());