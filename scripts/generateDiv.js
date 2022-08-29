class GenerateDiv {
  constructor() {
    this.quantity = this.quantity;
    this.randNums = this.randNums;
    this.container = this.container;
    this.divs = [];
    this.divHeights = [];
  }
  run() {
    for (let i = 0; i < this.quantity; i++) {
      this.divs.push(document.createElement('div'));
      this.divs[i].style.height = `${this.randNums[i]}%`;
      this.divHeights.push(this.randNums[i]);
      this.container.appendChild(this.divs[i]);
    }
  }
  reset() {
    this.container.innerHTML = '';
  }
}

export default GenerateDiv;
