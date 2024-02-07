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

const swiper3 = new Swiper('.other-slider.other-slider3', {
  modules: [EffectFade, Navigation],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  breakpoints: {
    1024: {
      width: 1010,
    },
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
