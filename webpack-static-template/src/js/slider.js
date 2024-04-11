import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


const brandSlider = new Swiper('.brand-list__slider', {
  modules: [Pagination],
  pagination: {
      el: '.brand-list__pagination',
      clickable: true,
  },
  slidesPerView: 1.2,
  spaceBetween: '16px',
  slidesPerView: 'auto',

  breakpoints: {
      767: {
          enabled: true,
      },
      768: {
          // slidesPerView: 3,
          spaceBetween: '0',
          enabled: false,
      },
  },
});

const deviceTypeSlider = new Swiper('.device-type-list__slider', {
  modules: [Pagination],
  pagination: {
      el: '.device-type-list__pagination',
      clickable: true,
  },
  slidesPerView: 1.2,
  spaceBetween: '16px',
  slidesPerView: 'auto',

  breakpoints: {
      767: {
          enabled: true,
      },
      768: {
          // slidesPerView: 3,
          spaceBetween: '0',
          enabled: false,
      },
  },
});


const priceTypeSlider = new Swiper('.price-list__slider', {
  modules: [Pagination],
  pagination: {
      el: '.price-list__pagination',
      clickable: true,
  },
  slidesPerView: 1.2,
  spaceBetween: '16px',
  slidesPerView: 'auto',

  breakpoints: {
      767: {
          enabled: true,
      },
      768: {
          // slidesPerView: 1,
          spaceBetween: '0',
          enabled: false,
      },
  },
});

