class DivGenerator {
  constructor() {
    this.quantity = this.quantity;
    this.randNums = this.randNums;
    this.container = this.container;
    this.divs = [];
    this.divHeights = [];
  }
  start() {
    for (let i = 0; i < this.quantity; i++) {
      this.divs[i] = document.createElement('div');
      this.divs[i].style.height = `${this.randNums[i]}%`;
      this.divHeights[i] = this.randNums[i];
      this.container.appendChild(this.divs[i]);

      this.divs.forEach((div) => {
        div.style.backgroundColor = '#00ffff';
      });
    }
  }
  clear() {
    this.container.innerHTML = '';
  }
}

export default DivGenerator;
