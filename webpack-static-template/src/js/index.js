import '../scss/style.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const brandList = document.querySelector('.brand-list');
const brandListBody = brandList.querySelector('.brand-list__body');
const showAllBrandBtn = brandList.querySelector('.brand-list__more-btn');


showAllBrandBtn.addEventListener('click', () => {

    if (!showAllBrandBtn.classList.contains('brand-list__more-btn--open')) {
      showAllBrandBtn.classList.add('brand-list__more-btn--open');
        brandListBody.classList.add('brand-list__body--extended');
        showAllBrandBtn.textContent = 'Скрыть';
    } else {
        showAllBrandBtn.classList.remove('brand-list__more-btn--open');
        brandListBody.classList.remove('brand-list__body--extended');
        showAllBrandBtn.textContent = 'Показать всё';
    }
});

const deviceTypeList = document.querySelector('.device-type-list');
const deviceTypeBody = deviceTypeList.querySelector('.device-type-list__body');
const showAllDeviceTypeBtn = deviceTypeList.querySelector('.device-type-list__more-btn');

showAllDeviceTypeBtn.addEventListener('click', () => {

    if (!showAllDeviceTypeBtn.classList.contains('device-type-list__more-btn--open')) {
      showAllDeviceTypeBtn.classList.add('device-type-list__more-btn--open');
      deviceTypeBody.classList.add('device-type-list__body--extended');
      showAllDeviceTypeBtn.textContent = 'Скрыть';
    } else {
      showAllDeviceTypeBtn.classList.remove('device-type-list__more-btn--open');
      deviceTypeBody.classList.remove('device-type-list__body--extended');
      showAllDeviceTypeBtn.textContent = 'Показать всё';
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
          // slidesPerView: 3,
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
          // slidesPerView: 3,
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
          // slidesPerView: 1,
          spaceBetween: '0',
          enabled: false,
      },
  },
});
