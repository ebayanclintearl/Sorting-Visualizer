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
import { disabledButtons } from './Utils/helperBtns.js';

const divContainer = document.querySelector('.main .container');
const shuffleButton = document.querySelector('.shuffle-btn');
const sortButton = document.querySelector('.sort-btn');
const sizeBtnTitle = document.querySelector('#size-btn-title');
const sizeBtns = document.querySelectorAll('#size-btns button');
const speedBtnTitle = document.querySelector('#speed-btn-title');
const speedBtns = document.querySelectorAll('#speed-btns button');
const algoBtns = document.querySelectorAll('.algo ul li button');
const algo = document.querySelector('.algo.unactive');
const menuBtn = document.querySelector('.menu-btn');

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
  DivConfig.comulativeDelay = 0;
};

const runDefault = () => {
  randNumbers.size = size.medium;
  DivConfig.delay = speed.moderate;
  renderDivs();
};

window.onload = runDefault();

sizeBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    let textTarget = e.target.innerText.toLowerCase();
    switch (textTarget) {
      case 'small':
        randNumbers.size = size.small;
        sizeBtnTitle.innerText = size.smallText;
        renderDivs();
        break;
      case 'medium':
        randNumbers.size = size.medium;
        sizeBtnTitle.innerText = size.mediumText;
        renderDivs();
        break;
      case 'large':
        randNumbers.size = size.large;
        sizeBtnTitle.innerText = size.largeText;
        renderDivs();
        break;
      default:
        return;
    }
  });
});

speedBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    let textTarget = e.target.innerText.toLowerCase();
    switch (textTarget) {
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
  });
});

shuffleButton.addEventListener('click', () => {
  renderDivs();
});
sortButton.addEventListener('click', () => {
  sortType.start();
  DivConfig.comulativeDelay = 0;
  if (!sortType.isObjEmpty()) disabledButtons();
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

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  algo.classList.toggle('active');
});
