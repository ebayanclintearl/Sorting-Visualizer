import { divGenerator } from './main.js';
let comulativeDelay = 0;
class DivConfig {
  constructor({ index, height, color }) {
    this.divGenerator = divGenerator;
    this.index = index;
    this.height = height;
    this.color = color;
    this.delay = 0.5;
    this.timeOut();
  }
  timeOut() {
    setTimeout(() => {
      this.updateDiv(this.index, this.height, this.color);
    }, (comulativeDelay += this.delay));
  }
  updateDiv(index, height, bgColor) {
    let divs = this.divGenerator.divs;
    divs[index].style.height = height + '%';
    divs[index].style.backgroundColor = bgColor;
  }
}

export default DivConfig;
