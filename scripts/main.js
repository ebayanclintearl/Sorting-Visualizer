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
const divGenerator = new DivGenerator();
const bubbleSort = new BubbleSort();
DivConfig.divContainer = divContainer;

const renderDivs = () => {
  const rangeValue = document.querySelector('#myRange').value;
  randNumbers.size = rangeValue;
  randNumbers.clear();
  randNumbers.start();

  divGenerator.container = divContainer;
  divGenerator.randNums = randNumbers.numbers;

  divGenerator.clear();
  divGenerator.start();
  bubbleSort.arr = randNumbers.numbers;
  DivConfig.resetDelay();
};

window.onload = renderDivs();
const btnStart = document.querySelector('.btn.start');
btnStart.addEventListener('click', () => {
  bubbleSort.start();
});
