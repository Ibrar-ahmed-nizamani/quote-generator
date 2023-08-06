'use strict';

const adviceId = document.querySelector('.id-no');
const adviceText = document.querySelector('.advice-text');
const adviceTextBox = document.querySelector('.advice__text-box');
const btn = document.querySelector('.dice');

const newAdvice = async function () {
  try {
    adviceTextBox.style.opacity = 0;

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const idNum = data.slip.id;
    const advice = data.slip.advice;

    adviceId.textContent = idNum;
    adviceText.textContent = advice;

    adviceTextBox.style.opacity = 1;
    adviceTextBox.style.transition = 'opacity 0.6s';
  } catch (err) {
    adviceText.textContent = `Sorry! No internet connection.`;
    adviceTextBox.style.opacity = 1;
    adviceTextBox.style.transition = 'opacity 0.6s';
    adviceId.textContent = '999';
  }
};

btn.addEventListener('click', newAdvice);
