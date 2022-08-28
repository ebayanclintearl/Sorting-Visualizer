import GenerateDiv from './generateDiv.js';
import generateRandNums from './generateNumber.js';
import quantitybubbleSort from './bubbleSort.js';

const sliderRange = document.getElementById('myRange');
sliderRange.addEventListener('input', (e) => {
  renderDivs();
});

const renderDivs = () => {
  const divContainer = document.querySelector('.container');
  const rangeValue = document.getElementById('myRange').value;

  generateRandNums.size = rangeValue;
  generateRandNums.start();

  const generateDiv = new GenerateDiv({
    container: divContainer,
    quantity: rangeValue,
    randNums: generateRandNums.numbers,
  });
  generateDiv.reset();
  generateDiv.run();
};

window.onload = renderDivs();
