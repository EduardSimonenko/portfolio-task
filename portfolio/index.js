import i18Obj from './translate.js';

const arrThemeClass = [skills, portfolio, video, price]
const arrThemeClass1 = [subtitle1, subtitle2, subtitle3, subtitle4]
const portfolioBtn = document.querySelectorAll('.portfolio-btn')
const pageTheme = document.querySelector('.page-theme')
const navLight = document.querySelectorAll('.nav')
const navLinkOpen = document.querySelectorAll('.nav-link')
const hamburgerLineOpen = document.querySelectorAll('.line')

function changeTheme(){
  arrThemeClass.forEach((el) => {
    el.classList.toggle('light-theme')
  })
  arrThemeClass1.forEach((el) => {
    el.classList.toggle('light-theme')
  })
  portfolioBtn.forEach((el) => {
    el.classList.toggle('light-theme')
  })
  navLight.forEach((el) => {
    el.classList.toggle('light-theme')
  })
  navLinkOpen.forEach((el) => {
    el.classList.toggle('light-theme')
  })
  hamburgerLineOpen.forEach((el) => {
    el.classList.toggle('light-theme')
  })
}

pageTheme.addEventListener('click', changeTheme)

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link')
const hamburgerLine = document.querySelectorAll('.line')
const body = document.querySelector('.body')

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  body.classList.toggle('open');
  navLink.forEach((el) => el.classList.toggle('open'))
  hamburgerLine.forEach((el) => el.classList.toggle('open'))
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu(event){
    if(event.target.classList.contains('nav-link')){
        hamburger.classList.remove('open');
        nav.classList.remove('open')
    }
}
nav.addEventListener('click', closeMenu)

const portfolioImg = document.querySelectorAll('.portfolio-img')
const portfolioBtns = document.querySelector('.portfolio-btns')

function changeImage(event){
  if(event.target.classList.contains('portfolio-btn')){
    const activeBtns = document.querySelectorAll('.button-active')
    activeBtns.forEach(el => el.classList.remove('button-active'))
    event.target.classList.add('button-active')
    portfolioImg.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  }
}
portfolioBtns.addEventListener('click', changeImage);


const content = document.querySelectorAll('[data-i18]');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');

function getTranslate(language){
  content.forEach((el) => {
    el.textContent = i18Obj[language][el.dataset.i18]
  })
}

function changeLang(event){
  if(event.target.classList.contains('lang')){
    const activeLang = document.querySelectorAll('.lang-active')
    activeLang.forEach((el) => el.classList.remove('lang-active'))
    event.target.classList.add('lang-active')
  }
}

ru.addEventListener('click', () => getTranslate('ru'))
ru.addEventListener('click', changeLang)
en.addEventListener('click', () => getTranslate('en'))
en.addEventListener('click', changeLang)



