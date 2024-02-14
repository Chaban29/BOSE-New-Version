'use strict';

const burgerButton = document.querySelector('.burger-menu');
const closeIcon = document.getElementById('close__icon');
const burgerNavigationMenu = document.querySelector('.burger-nav');
const burgerIconMenu = document.querySelector('.icon--menu');

burgerIconMenu.addEventListener('click', () => {
  burgerNavigationMenu.classList.toggle('active');
});

closeIcon.onclick = () => {
  burgerNavigationMenu.classList.toggle('active');
};

const recommendedScrollItem = document.querySelector('.recommended-scroll');
