import Swiper from 'swiper';
import 'node_modules/swiper/src/swiper';

new Swiper(`.Slider`, {
  loop: true,
  autoplay: {
    delay: 3000
  }
});
