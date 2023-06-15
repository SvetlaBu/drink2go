/* в этот файл добавляет скрипты*/
import Swiper from 'swiper/bundle';
var swiper = new Swiper('.swiper__container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,
  watchSlidesProgress: true
});

// var swiperEl = document.querySelector('.swiper-container');

swiperEl.addEventListener('mouseenter', function(event) {
  const el = event.target;
  if (el && el.matches && el.matches('.swiper__container')) {
    // console.log('mouseenter');
    // console.log('autoplay running', swiper.autoplay.running);
    el.swiper.autoplay.stop();
    el.classList.add('swiper-paused');

    const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
    activeNavItem.style.animationPlayState="paused";
  }
}, true);

document.addEventListener('mouseleave', event => {
  // console.log('mouseleave', swiper.activeIndex, swiper.slides[swiper.activeIndex].progress);
  // console.log('autoplay running', swiper.autoplay.running);
  const el = event.target;
  if (el && el.matches && el.matches('.swiper__container')) {
    el.swiper.autoplay.start();
    el.classList.remove('swiper-paused');

    const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

    activeNavItem.classList.remove('swiper-pagination-bullet-active');
    // activeNavItem.style.animation = 'none';

    setTimeout(() => {
      activeNavItem.classList.add('swiper-pagination-bullet-active');
      // activeNavItem.style.animation = '';
    }, 10);
  }
}, true);

swiper();
