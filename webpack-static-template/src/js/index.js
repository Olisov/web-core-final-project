import '../scss/style.scss';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


const aboutUs = document.querySelector('.about-us__desc');
const aboutUsDesc = aboutUs.querySelector('.about-us__desc-item-group');
const showAllaboutUsDescBtn = aboutUs.querySelector('.about-us__more-btn');

const brandList = document.querySelector('.brand-list');
const brandListBody = brandList.querySelector('.brand-list__body');
const showAllBrandBtn = brandList.querySelector('.brand-list__more-btn');

const deviceTypeList = document.querySelector('.device-type-list');
const deviceTypeBody = deviceTypeList.querySelector('.device-type-list__body');
const showAllDeviceTypeBtn = deviceTypeList.querySelector('.device-type-list__more-btn');


const showMore = {
  aboutUs : {
    body: aboutUsDesc,
    extendBodyClass: 'about-us__desc-item-group--extended',
    triggerBtn: showAllaboutUsDescBtn,
    openedBtnClass: 'more-btn--open',
    hiddenTextContent: 'Читать далее',
  },
  brandList : {
    body: brandListBody,
    extendBodyClass: 'brand-list__body--extended',
    triggerBtn: showAllBrandBtn,
    openedBtnClass: 'more-btn--open',
    hiddenTextContent: 'Показать всё',
  },
  deviceTypeList : {
    body: deviceTypeBody,
    extendBodyClass: 'device-type-list__body--extended',
    triggerBtn: showAllDeviceTypeBtn,
    openedBtnClass: 'more-btn--open',
    hiddenTextContent: 'Показать всё',
  },
}

function expandArea(targetArea) {

  if (!targetArea['triggerBtn'].classList.contains(targetArea['openedBtnClass'])) {
    targetArea['triggerBtn'].classList.add(targetArea['openedBtnClass']);
    targetArea['body'].classList.add(targetArea['extendBodyClass']);
    targetArea['triggerBtn'].textContent = 'Скрыть';
  } else {
    targetArea['triggerBtn'].classList.remove(targetArea['openedBtnClass']);
    targetArea['body'].classList.remove(targetArea['extendBodyClass']);
    targetArea['triggerBtn'].textContent = targetArea['hiddenTextContent'];
  }
}

showAllaboutUsDescBtn.addEventListener('click', () => {
  expandArea(showMore['aboutUs'])
});

showAllBrandBtn.addEventListener('click', () => {
  expandArea(showMore['brandList'])
});

showAllDeviceTypeBtn.addEventListener('click', () => {
  expandArea(showMore['deviceTypeList'])
});


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


const showAsideMenuBtn = document.querySelector('.func-btn--burger-menu');
const closeAsideMenuBtn = document.querySelector('#close-aside-btn');

const blureBackground = document.querySelector('.blure');
const asideMenu = document.querySelector('.aside-nav');
const messageBtnArray = document.querySelectorAll('.func-btn--message');
const phoneBtnArray = document.querySelectorAll('.func-btn--phone');


const connectWithUs = document.querySelector('.connectWithUs');
const closeConnectWithUsBtn = connectWithUs.querySelector('.connectWithUs__close-btn');
const connectWithUsTitle = connectWithUs.querySelector('.connectWithUs__title');
const connectWithUsFormName = connectWithUs.querySelector('#connectWithUsFormName');
const connectWithUsFormEmail = connectWithUs.querySelector('#connectWithUsFormEmail');
const connectWithUsFormMessage = connectWithUs.querySelector('#connectWithUsFormMessage');



showAsideMenuBtn.addEventListener('click', () => {

  blureBackground.classList.add('blure--active');
  asideMenu.classList.add('aside-nav--modal');

})

closeAsideMenuBtn.addEventListener('click', () => {

  asideMenu.classList.remove('aside-nav--modal');

  if (!asideMenu.classList.contains('aside-nav--modal') &&
      !connectWithUs.classList.contains('connectWithUs--active')) {
    blureBackground.classList.remove('blure--active');
  }

})


blureBackground.addEventListener('click', () => {

  blureBackground.classList.remove('blure--active');
  if(asideMenu.classList.contains('aside-nav--modal')) {
    asideMenu.classList.remove('aside-nav--modal');
  }
  if (connectWithUs.classList.contains('connectWithUs--active')) {
    connectWithUs.classList.remove('connectWithUs--active')
  }


})


closeConnectWithUsBtn.addEventListener('click', () => {

  connectWithUs.classList.remove('connectWithUs--active')
  if (!asideMenu.classList.contains('aside-nav--modal') &&
      !connectWithUs.classList.contains('connectWithUs--active')) {
    blureBackground.classList.remove('blure--active');
  }
})

messageBtnArray.forEach( messageBtn => {
  messageBtn.addEventListener('click', () => {
    blureBackground.classList.add('blure--active');
    connectWithUs.classList.add('connectWithUs--active')
    connectWithUsTitle.textContent = 'Обратная связь'

    if (connectWithUsFormName.classList.contains('connectWithUs__form-item--disable')) {

      connectWithUsFormName.classList.remove('connectWithUs__form-item--disable')
      connectWithUsFormEmail.classList.remove('connectWithUs__form-item--disable')
      connectWithUsFormMessage.classList.remove('connectWithUs__form-item--disable')

      connectWithUsFormName.removeAttribute("disabled", "")
      connectWithUsFormEmail.removeAttribute("disabled", "")
      connectWithUsFormMessage.removeAttribute("disabled", "")
    }

  })
})


phoneBtnArray.forEach( messageBtn => {
  messageBtn.addEventListener('click', () => {
    blureBackground.classList.add('blure--active');
    connectWithUs.classList.add('connectWithUs--active')
    connectWithUsTitle.textContent = 'Заказать звонок'

     connectWithUsFormName.classList.add('connectWithUs__form-item--disable')
     connectWithUsFormEmail.classList.add('connectWithUs__form-item--disable')
     connectWithUsFormMessage.classList.add('connectWithUs__form-item--disable')

     connectWithUsFormName.setAttribute("disabled", "")
     connectWithUsFormEmail.setAttribute("disabled", "")
     connectWithUsFormMessage.setAttribute("disabled", "")


  })
})

