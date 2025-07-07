import './style.css';
import typescriptLogo from './typescript.svg';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

const appdiv = document.querySelector<HTMLDivElement>('#app');
console.log('appdiv: ', appdiv, typeof appdiv);

const amountH2 = document.querySelector('#amount');
amountH2!.textContent = 'simple 1'
console.log('amountDiv: ', amountH2);

let summ: number = 0;

function setupCounter(element: HTMLButtonElement | null) {
  if (element) {
    let counter = 0;
    const setCounter = (count: number) => {
      counter = count;
      element.textContent = `count is ${counter}`;
      amountH2!.textContent = (summ + counter).toString();
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }
}


/* !.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
*/
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

const buttonOne = document.querySelector<HTMLButtonElement>('#counterOne');
setupCounter(buttonOne);