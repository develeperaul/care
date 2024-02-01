import './index.scss';
import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
const swiper = new Swiper('.other-slider', {
  modules: [EffectFade, Navigation],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  breakpoints: {
    1024: {
      width: 880,
    },
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
