// import './style.css';
import viteLogo from '/vite.svg';

const app = () => {
  console.log('Hallo ts', viteLogo);
  
  const text: string = 'Только самые сочные бургеры!';
  const siteTitle = document.querySelector('#site-title');
  siteTitle!.textContent = text;
}


app();
