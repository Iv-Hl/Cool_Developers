import 'animate.css';

const goTopBtn = document.querySelector('.scroll-up');

const trackScroll = () => {
  const offset = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
};

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

if (goTopBtn) {
  goTopBtn.addEventListener('click', goTop);
} else {
  console.error('Кнопка "scroll-up" (goTopBtn) не знайдена.');
}

window.addEventListener('scroll', trackScroll);

export { trackScroll };
