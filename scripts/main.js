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

shuffleButton.addEventListener('click', () => {
  renderDivs();
});
sortButton.addEventListener('click', () => {
  bubbleSort.start();
  // insertionSort.start();
  // selectionSort.start();
  //quickSort.start();
  //mergeSort.start();
  //heapSort.start();
  DivConfig.resetDelay();
});

const size = {
  small: 30,
  medium: 70,
  large: 100,
};
const speed = {
  slow: 1000,
  moderate: 50,
  fast: 1,
};
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
  randNumbers.size = size.small;
  renderDivs();
};
window.onload = runDefault();
window.onclick = (e) => {
  console.log(e.target.parentElement);
  let textTarget = e.target.innerText.toLowerCase();
  switch (textTarget) {
    case 'small':
      randNumbers.size = size.small;
      renderDivs();
      break;
    case 'medium':
      randNumbers.size = size.medium;
      renderDivs();
      break;
    case 'large':
      randNumbers.size = size.large;
      renderDivs();
      break;
    case 'slow':
      DivConfig.delay = speed.slow;
      break;
    case 'moderate':
      DivConfig.delay = speed.moderate;
      break;
    case 'fast':
      DivConfig.delay = speed.fast;
      break;
  }
};
