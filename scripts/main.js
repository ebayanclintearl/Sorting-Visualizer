import DivGenerator from './Utils/divGenerator.js';
import DivConfig from './Utils/divConfig.js';
import RandomNumbers from './Utils/randomNumberGenerator.js';
import BubbleSort from './Sorting Algorithms/bubbleSort.js';
import InsertionSort from './Sorting Algorithms/insertionSort.js';
import SelectionSort from './Sorting Algorithms/selectionSort.js';
import QuickSort from './Sorting Algorithms/quickSort.js';
import MergeSort from './Sorting Algorithms/mergeSort.js';
import HeapSort from './Sorting Algorithms/heapSort.js';

const sizeSlider = document.querySelector('#sizeSlider');
const speedSlider = document.querySelector('#speedSlider');
const divContainer = document.querySelector('.main .container');
const resetButton = document.querySelector('.shuffle-btn');
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

sizeSlider.addEventListener('input', () => {
  renderDivs();
});
speedSlider.addEventListener('input', () => {
  let value = parseInt(speedSlider.value);
  DivConfig.delay = 100 / value;
});
resetButton.addEventListener('click', () => {
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

const renderDivs = () => {
  randNumbers.size = parseInt(sizeSlider.value);
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

window.onload = renderDivs();
