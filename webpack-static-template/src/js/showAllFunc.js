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
