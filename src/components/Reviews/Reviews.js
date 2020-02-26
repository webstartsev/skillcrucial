import Swiper from 'swiper';

const reviewThumbs = new Swiper('.Reviews-thumbs', {
  slidesPerView: 2,
  simulateTouch: false,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});

new Swiper(`.Reviews-wrap`, {
  speed: 100,
  loop: true,
  effect: 'fade',
  thumbs: {
    swiper: reviewThumbs
  }
});
