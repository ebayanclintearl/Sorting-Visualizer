import DivGenerator from './Utils/divGenerator.js';
import DivConfig from './Utils/divConfig.js';
import RandomNumbers from './Utils/randomNumberGenerator.js';
import BubbleSort from './Sorting Algorithms/bubbleSort.js';
import InsertionSort from './Sorting Algorithms/insertionSort.js';
import SelectionSort from './Sorting Algorithms/selectionSort.js';
import QuickSort from './Sorting Algorithms/quickSort.js';
import MergeSort from './Sorting Algorithms/mergeSort.js';
import HeapSort from './Sorting Algorithms/heapSort.js';

const divContainer = document.querySelector('.main .container');
const shuffleButton = document.querySelector('.shuffle-btn');
const sortButton = document.querySelector('.sort-btn');
const sizeBtnTitle = document.querySelector('#size-btn-title');
const speedBtnTitle = document.querySelector('#speed-btn-title');

const randNumbers = new RandomNumbers();
const divGenerator = new DivGenerator();
const bubbleSort = new BubbleSort();
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

const size = {
  small: 30,
  medium: 70,
  large: 100,
  smallText: 'SIZE: small',
  mediumText: 'SIZE: medium',
  largeText: 'SIZE: large',
};
const speed = {
  slow: 1000,
  moderate: 50,
  fast: 1,
  slowText: 'SPEED: slow',
  moderateText: 'SPEED: moderate',
  fastText: 'SPEED: fast',
};

const runDefault = () => {
  randNumbers.size = size.medium;
  DivConfig.delay = speed.moderate;
  renderDivs();
};

window.onload = runDefault();

const SortingAlgo = {
  isBubbleClicked: false,
  isInsertionClicked: false,
  isSelectionClicked: false,
  isMergeClicked: false,
  isQuickClicked: false,
  isHeapClicked: false,
};

window.onclick = (e) => {
  let textTarget = e.target.innerText.toLowerCase();
  console.log(e.target);
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
  bubbleSort.start();
  // insertionSort.start();
  // selectionSort.start();
  // quickSort.start();
  //mergeSort.start();
  //heapSort.start();
  DivConfig.resetDelay();
});
