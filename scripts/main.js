import DivGenerator from './divGenerator.js';
import DivConfig from './divConfig.js';
import RandomNumbers from './randomNumberGenerator.js';
import BubbleSort from './bubbleSort.js';

const sliderRange = document.querySelector('#myRange');
const divContainer = document.querySelector('.container');
const btnStart = document.querySelector('.btn.start');

sliderRange.addEventListener('input', () => {
  renderDivs();
});

const randNumbers = new RandomNumbers();
const divGenerator = new DivGenerator();
const bubbleSort = new BubbleSort();
BubbleSort.config = DivConfig;
DivConfig.container = divContainer;
btnStart.addEventListener('click', () => {
  bubbleSort.start();
});

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
