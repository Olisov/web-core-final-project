import '../scss/style.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const brandList = document.querySelector('.brand-list');
const brandListBody = brandList.querySelector('.brand-list__body');
const showAllBtn = brandList.querySelector('.brand-list__more-btn');


showAllBtn.addEventListener('click', () => {

    if (!showAllBtn.classList.contains('brand-list__more-btn--open')) {
        showAllBtn.classList.add('brand-list__more-btn--open');
        brandListBody.classList.add('brand-list__body--extended');
        showAllBtn.textContent = 'Скрыть';
    } else {
        showAllBtn.classList.remove('brand-list__more-btn--open');
        brandListBody.classList.remove('brand-list__body--extended');
        showAllBtn.textContent = 'Показать всё';
    }
});


const brandSlider = new Swiper('.brand-list__slider', {
  modules: [Navigation, Pagination],
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
          slidesPerView: 3,
          spaceBetween: '0',
          enabled: false,
      },
  },
});

const deviceTypeSlider = new Swiper('.device-type-list__slider', {
  modules: [Navigation, Pagination],
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
          slidesPerView: 3,
          spaceBetween: '0',
          enabled: false,
      },
  },
});


const priceTypeSlider = new Swiper('.price-list__slider', {
  modules: [Navigation, Pagination],
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
          slidesPerView: 3,
          spaceBetween: '0',
          enabled: false,
      },
  },
});
