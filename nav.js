const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', function() {
  menuItems.classList.toggle('active');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 420) {
    menuItems.classList.remove('active');
  }
});

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function() {
    if (window.innerWidth <= 420) {
      menuItems.classList.remove('active');
    }
  });
});
