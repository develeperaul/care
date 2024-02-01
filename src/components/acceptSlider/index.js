import './index.scss';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
const swiper = new Swiper('.accept-slider', {
  modules: [Navigation],
  slidesPerView: 1.3,
  spaceBetween: 14,
  breakpoints: {
    1024: {
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
