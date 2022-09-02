import DivGenerator from './Utils/divGenerator.js';
import DivConfig from './Utils/divConfig.js';
import RandomNumbers from './Utils/randomNumberGenerator.js';
import BubbleSort from './Sorting Algorithms/bubbleSort.js';
import InsertionSort from './Sorting Algorithms/insertionSort.js';
import SelectionSort from './Sorting Algorithms/selectionSort.js';

const sliderRange = document.querySelector('#myRange');
const divContainer = document.querySelector('.container');
const btnStart = document.querySelector('.btn.start');

const randNumbers = new RandomNumbers();
const divGenerator = new DivGenerator();
const bubbleSort = new BubbleSort();
const insertionSort = new InsertionSort();
const selectionSort = new SelectionSort();
DivConfig.container = divContainer;
divGenerator.container = divContainer;

sliderRange.addEventListener('input', () => {
  renderDivs();
});
btnStart.addEventListener('click', () => {
  bubbleSort.start();
  //insertionSort.start();
  //selectionSort.start();
  DivConfig.resetDelay();
});

const renderDivs = () => {
  randNumbers.size = sliderRange.value;
  randNumbers.clear();
  randNumbers.start();

  divGenerator.randNums = randNumbers.numbers;
  divGenerator.clear();
  divGenerator.start();

  bubbleSort.arr = randNumbers.numbers;
  insertionSort.arr = randNumbers.numbers;
  selectionSort.arr = randNumbers.numbers;
  DivConfig.resetDelay();
};

window.onload = renderDivs();
