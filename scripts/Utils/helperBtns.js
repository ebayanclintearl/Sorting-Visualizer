import DivConfig from './divConfig.js';
const algoBtns = document.querySelectorAll('.algo ul li button');
const sizeBtns = document.querySelectorAll('#size-btns button');
const speedBtns = document.querySelectorAll('#speed-btns button');
const shuffleButton = document.querySelector('.shuffle-btn');

export const enableButtons = () => {
  setTimeout(() => {
    algoBtns.forEach((button) => {
      button.disabled = false;
    });
    sizeBtns.forEach((button) => {
      button.disabled = false;
    });
    speedBtns.forEach((button) => {
      button.disabled = false;
    });
    shuffleButton.disabled = false;
    shuffleButton.classList.remove('disabled');
  }, (DivConfig.comulativeDelay += DivConfig.delay));
};

export const disabledButtons = () => {
  algoBtns.forEach((button) => {
    button.disabled = true;
  });
  sizeBtns.forEach((button) => {
    button.disabled = true;
  });
  speedBtns.forEach((button) => {
    button.disabled = true;
  });
  shuffleButton.disabled = true;
  shuffleButton.classList.add('disabled');
};
