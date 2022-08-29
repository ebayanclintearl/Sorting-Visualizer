import DivGenerator from './divGenerator.js';
import DivConfig from './divConfig.js';
import RandomNumbers from './randomNumberGenerator.js';
import BubbleSort from './bubbleSort.js';

const sliderRange = document.querySelector('#myRange');
sliderRange.addEventListener('input', () => {
  renderDivs();
});

const divContainer = document.querySelector('.container');
const randNumbers = new RandomNumbers();
export const divGenerator = new DivGenerator();

const renderDivs = () => {
  const rangeValue = document.querySelector('#myRange').value;
  randNumbers.size = rangeValue;
  randNumbers.clear();
  randNumbers.start();

  divGenerator.container = divContainer;
  divGenerator.quantity = rangeValue;
  divGenerator.randNums = randNumbers.numbers;

  divGenerator.clear();
  divGenerator.start();
};

window.onload = renderDivs();
const bubbleSort = new BubbleSort({ divGeneratorRef: divGenerator });
const btnStart = document.querySelector('.btn.start');
btnStart.addEventListener('click', () => {
  bubbleSort.start();
});
