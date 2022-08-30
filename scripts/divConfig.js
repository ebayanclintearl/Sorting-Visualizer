class DivConfig {
  static comulativeDelay = 0;
  static divContainer = DivConfig.divContainer;
  constructor({ index, height, color }) {
    this.index = index;
    this.height = height;
    this.color = color;
    this.delay = 0.5;
    this.updateDiv();
  }
  updateDiv() {
    setTimeout(() => {
      DivConfig.divContainer.childNodes[this.index].style.height =
        this.height + '%';
      DivConfig.divContainer.childNodes[this.index].style.backgroundColor =
        this.color;
    }, (DivConfig.comulativeDelay += this.delay));
  }
  static resetDelay() {
    DivConfig.comulativeDelay = 0;
  }
}

export default DivConfig;
