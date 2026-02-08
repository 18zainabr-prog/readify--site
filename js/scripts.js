
function saveToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav-active');
    navUl.classList.toggle('nav-active');
  });
});