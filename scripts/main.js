import GenerateDiv from './generateDiv.js';
import generateRandNums from './generateNumber.js';

const sliderRange = document.getElementById('myRange');
sliderRange.addEventListener('input', (e) => {
  changeDivQuantity();
});

const changeDivQuantity = () => {
  let quantity = document.getElementById('myRange').value;
  const generateDiv = new GenerateDiv({ divQuantity: quantity });
  generateDiv.reset();
  generateDiv.run();
};
window.onload = changeDivQuantity();
