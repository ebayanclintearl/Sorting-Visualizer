import GenerateDiv from './generateDiv.js';
import generateRandNums from './generateNumber.js';
import bubbleSort from './bubbleSort.js';

const sliderRange = document.getElementById('myRange');
sliderRange.addEventListener('input', () => {
  renderDivs();
});

const divContainer = document.querySelector('.container');
const randNumbers = new generateRandNums();
export const generateDivs = new GenerateDiv();
const renderDivs = () => {
  const rangeValue = document.getElementById('myRange').value;
  randNumbers.size = rangeValue;
  randNumbers.reset();
  randNumbers.start();

  generateDivs.container = divContainer;
  generateDivs.quantity = rangeValue;
  generateDivs.randNums = randNumbers.numbers;

  generateDivs.reset();
  generateDivs.run();
};

window.onload = renderDivs();

bubbleSort();
