class DivConfig {
  static comulativeDelay = 0;
  static container = DivConfig.container;
  constructor({ index, height, color }) {
    this.index = index;
    this.height = height;
    this.color = color;
    this.delay = 1;
    this.updateDiv();
  }
  updateDiv() {
    setTimeout(() => {
      DivConfig.container.childNodes[this.index].style.height =
        this.height + '%';
      DivConfig.container.childNodes[this.index].style.backgroundColor =
        this.color;
    }, (DivConfig.comulativeDelay += this.delay));
  }
  static resetDelay() {
    DivConfig.comulativeDelay = 0;
  }
}

export default DivConfig;
