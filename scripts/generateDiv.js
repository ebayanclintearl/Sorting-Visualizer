import generateRandNums from './generateNumber.js';
const container = document.querySelector('.container');
class GenerateDiv {
  constructor({ divQuantity }) {
    this.divQuantity = divQuantity;
    this.divHeight = this.divHeight;
    generateRandNums.size = this.divQuantity;
    generateRandNums.start();
  }
  run() {
    for (let i = 0; i < this.divQuantity; i++) {
      const div = document.createElement('div');
      div.style.height = `${generateRandNums.numbers[i]}%`;
      container.appendChild(div);
    }
  }
  reset() {
    container.innerHTML = '';
  }
}

export default GenerateDiv;
