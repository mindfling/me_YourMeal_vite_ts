// import './style.css';
import viteLogo from '/vite.svg';
import burgerLogo from '/logo-burger.svg';
// import burgerMiniLogo from '/burger-single-svg.svg';
import burgerMiniLogo from '/burgers-big-svg.svg';

const app = () => {
  console.log('Hallo ts', viteLogo, burgerLogo);
  
  const title: string = 'Your Meal';
  const promo: string = 'Только самые сочные бургеры!';
  const siteTitle = document.querySelector('#site-title');
  const siteTitle2 = document.querySelector('title');
  console.log('siteTitle2: ', siteTitle2);
  console.log('siteTitle: ', siteTitle);

  const siteFavicon1 = document.querySelector('link[rel^="icon"]');
  console.log('siteFavicon1: ', siteFavicon1);
  // found ever first link
  const siteFavicon2 = document.querySelector('link');
  console.log('siteFavicon2: ', siteFavicon2);
  // found the last favicon
  const siteFavicon = [...document.querySelectorAll('link[rel^="icon"]')].pop();
  console.log('siteFavicon: ', siteFavicon);
  
  // * на лету меняем фавиконку
  if (siteFavicon) {
    console.log('site favicon found, Ok');
    siteFavicon.setAttribute('href', burgerMiniLogo);
  } else {
    console.warn('site favicon not found ((');
  }
  
  // * на лету меняем заголовок сайта
  if (siteTitle) {
    console.log('site title found, Ok');
    siteTitle.textContent = `${title} - ${promo}`;
  } else {
    console.warn('site title not found ((');
  }
}


app();
