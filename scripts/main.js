import DivGenerator from './Utils/divGenerator.js';
import DivConfig from './Utils/divConfig.js';
import RandomNumbers from './Utils/randomNumberGenerator.js';
import SortType from './Utils/sortType.js';
import BubbleSort from './Sorting Algorithms/bubbleSort.js';
import InsertionSort from './Sorting Algorithms/insertionSort.js';
import SelectionSort from './Sorting Algorithms/selectionSort.js';
import QuickSort from './Sorting Algorithms/quickSort.js';
import MergeSort from './Sorting Algorithms/mergeSort.js';
import HeapSort from './Sorting Algorithms/heapSort.js';
import { size, speed } from './Utils/Configs.js';

const divContainer = document.querySelector('.main .container');
const shuffleButton = document.querySelector('.shuffle-btn');
const sortButton = document.querySelector('.sort-btn');
const sizeBtnTitle = document.querySelector('#size-btn-title');
const speedBtnTitle = document.querySelector('#speed-btn-title');
const algoBtns = document.querySelectorAll('.algo ul li button');

const randNumbers = new RandomNumbers();
const divGenerator = new DivGenerator();
const bubbleSort = new BubbleSort();
const sortType = new SortType();
const insertionSort = new InsertionSort();
const selectionSort = new SelectionSort();
const quickSort = new QuickSort();
const mergeSort = new MergeSort();
const heapSort = new HeapSort();
DivConfig.container = divContainer;
divGenerator.container = divContainer;

const renderDivs = () => {
  randNumbers.clear();
  randNumbers.start();

  divGenerator.randNums = randNumbers.numbers;
  divGenerator.clear();
  divGenerator.start();

  bubbleSort.arr = randNumbers.numbers;
  insertionSort.arr = randNumbers.numbers;
  selectionSort.arr = randNumbers.numbers;
  quickSort.arr = randNumbers.numbers;
  mergeSort.arr = randNumbers.numbers;
  heapSort.arr = randNumbers.numbers;
  DivConfig.resetDelay();
};

const runDefault = () => {
  randNumbers.size = size.medium;
  DivConfig.delay = speed.moderate;
  renderDivs();
};

window.onload = runDefault();

window.onclick = (e) => {
  let textTarget = e.target.innerText.toLowerCase();
  switch (textTarget) {
    case 'small':
      randNumbers.size = size.small;
      renderDivs();
      sizeBtnTitle.innerText = size.smallText;
      break;
    case 'medium':
      randNumbers.size = size.medium;
      renderDivs();
      sizeBtnTitle.innerText = size.mediumText;
      break;
    case 'large':
      randNumbers.size = size.large;
      renderDivs();
      sizeBtnTitle.innerText = size.largeText;
      break;
    case 'slow':
      DivConfig.delay = speed.slow;
      speedBtnTitle.innerText = speed.slowText;
      break;
    case 'moderate':
      DivConfig.delay = speed.moderate;
      speedBtnTitle.innerText = speed.moderateText;
      break;
    case 'fast':
      DivConfig.delay = speed.fast;
      speedBtnTitle.innerText = speed.fastText;
      break;
    default:
      return;
  }
};
shuffleButton.addEventListener('click', () => {
  renderDivs();
});
sortButton.addEventListener('click', () => {
  sortType.start();
  DivConfig.resetDelay();
});
algoBtns.forEach((button) => {
  button.addEventListener('click', () => {
    algoBtns.forEach((button) => button.classList.remove('active'));
    button.classList.add('active');
    let algoText = button.innerText.toLowerCase();
    if (algoText === 'bubble') sortType.type = bubbleSort;
    if (algoText === 'insertion') sortType.type = insertionSort;
    if (algoText === 'selection') sortType.type = selectionSort;
    if (algoText === 'merge') sortType.type = mergeSort;
    if (algoText === 'quick') sortType.type = quickSort;
    if (algoText === 'heap') sortType.type = heapSort;
  });
});
