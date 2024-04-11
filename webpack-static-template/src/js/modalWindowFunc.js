const showAsideMenuBtn = document.querySelector('.func-btn--burger-menu');
const closeAsideMenuBtn = document.querySelector('.aside-nav__header-close-btn');

const blureBackground = document.querySelector('.blure');
const asideMenu = document.querySelector('.aside-nav');
const messageBtnArray = document.querySelectorAll('.func-btn--message');
const phoneBtnArray = document.querySelectorAll('.func-btn--phone');


const connectWithUs = document.querySelector('.connectWithUs');
const closeConnectWithUsBtn = connectWithUs.querySelector('.connectWithUs__close-btn');
const connectWithUsTitle = connectWithUs.querySelector('.connectWithUs__title');
const connectWithUsFormName = connectWithUs.querySelector('.connectWithUs__form-name');
const connectWithUsFormEmail = connectWithUs.querySelector('.connectWithUs__form-email');
const connectWithUsFormMessage = connectWithUs.querySelector('.connectWithUs__form-message');



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

