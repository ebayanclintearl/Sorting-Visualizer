import { generateDivs } from './main.js';
let comulativeDelay = 0;
class GeneratedDivConfig {
  constructor({ index, height, color }) {
    this.generateDivs = generateDivs;
    this.index = index;
    this.height = height;
    this.color = color;
    this.delay = 5;
    this.timeOut();
  }
  timeOut() {
    setTimeout(() => {
      this.updateDiv(this.index, this.height, this.color);
    }, (comulativeDelay += this.delay));
  }
  updateDiv(index, height, bgColor) {
    let divs = this.generateDivs.divs;
    divs[index].style.height = height + '%';
    divs[index].style.backgroundColor = bgColor;
  }
}

export default GeneratedDivConfig;
