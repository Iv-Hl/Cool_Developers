import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { trackScroll } from './scroll-up';
AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  // Основні елементи для бургер-меню
  const mobileMenu = document.querySelector('.mob-menu');
  const openMenuBtn = document.querySelector('.mobile-menu-btn');
  const closeMenuBtn = document.querySelector('.mob-close-menu-btn');
  const modalOverlay = document.querySelector('.back-drop');
  const modalClsBody = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.mob-menu-link');
  const shopNowBtn = document.querySelector('.mob-meny-shop-btn');

  // Функція для перемикання меню
  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open', !isMenuOpen);
    modalOverlay.classList.toggle('is-open', !isMenuOpen);
    modalClsBody.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  // Перевірка наявності кнопок та додавання обробників подій
  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', toggleMenu);
  } else {
    console.error('Кнопка для відкриття меню (openMenuBtn) не знайдена.');
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMenu);
  } else {
    console.error('Кнопка для закриття меню (closeMenuBtn) не знайдена.');
  }

  // Закриття меню при кліку на посилання в мобільному меню
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', toggleMenu);
    });
  } else {
    console.error('Посилання в мобільному меню не знайдені.');
  }

  // Закриття меню при натисканні на кнопку "Shop now"
  if (shopNowBtn) {
    shopNowBtn.addEventListener('click', toggleMenu);
  } else {
    console.error('Кнопка "Shop now" (shopNowBtn) не знайдена.');
  }

  // Закриття меню на широких екранах при зміні орієнтації пристрою
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    if (mobileMenu) mobileMenu.classList.remove('is-open');
    if (modalOverlay) modalOverlay.classList.remove('is-open');
    if (openMenuBtn) openMenuBtn.setAttribute('aria-expanded', false);
    modalClsBody.style.overflow = ''; // Розблокування прокрутки тіла
  });
  document.body.style.overflow = '';
  trackScroll();
});
