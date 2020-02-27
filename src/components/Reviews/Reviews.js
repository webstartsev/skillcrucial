import Swiper from 'swiper';

const reviewThumbs = new Swiper('.Reviews-thumbs', {
  slidesPerView: document.querySelectorAll(`.ReviewThumb`).length,
  touchRatio: 0,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});

new Swiper(`.Reviews-wrap`, {
  simulateTouch: false,
  speed: 100,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  thumbs: {
    swiper: reviewThumbs
  }
});
