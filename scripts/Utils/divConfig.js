class DivConfig {
  static comulativeDelay = 0;
  static container = {};
  constructor({ index, height, color }) {
    this.index = index;
    this.height = height;
    this.color = color;
    this.delay = 20;
    this.#updateDiv();
  }
  #updateDiv() {
    setTimeout(() => {
      DivConfig.container.childNodes[this.index].style.height =
        this.height + '%';
      DivConfig.container.childNodes[this.index].style.transition =
        'height 0.2s ease-in';
      DivConfig.container.childNodes[this.index].style.backgroundColor =
        this.color;
    }, (DivConfig.comulativeDelay += this.delay));
  }
  static resetDelay() {
    DivConfig.comulativeDelay = 0;
  }
}

export default DivConfig;