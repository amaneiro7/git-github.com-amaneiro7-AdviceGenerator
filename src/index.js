import './styles/main.css';
import getData from './utils/gedData';
const btn = document.querySelector('button');
const id = document.querySelector('.id');
const advice = document.querySelector('.advice');


window.addEventListener('load', getQuote);
btn.addEventListener('click', getQuote);


async function getQuote() {
    const data = await getData();
    id.textContent = `advice #${data.slip.id}`;
    advice.textContent = data.slip.advice;
}

