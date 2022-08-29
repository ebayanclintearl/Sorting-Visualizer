import { divContainer } from './main.js';
let comulativeDelay = 0;
class DivConfig {
  constructor({ index, height, color }) {
    this.index = index;
    this.height = height;
    this.color = color;
    this.delay = 0.5;
    this.timeOut();
  }
  timeOut() {
    setTimeout(() => {
      this.updateDiv();
    }, (comulativeDelay += this.delay));
  }
  updateDiv() {
    divContainer.childNodes[this.index].style.height = this.height + '%';
    divContainer.childNodes[this.index].style.backgroundColor = this.color;
  }
  static resetDelay() {
    comulativeDelay = 0;
  }
}

export default DivConfig;
