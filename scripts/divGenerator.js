class DivGenerator {
  constructor() {
    this.randNums = this.randNums;
    this.container = this.container;
  }
  start() {
    for (let i = 0; i < this.randNums.length; i++) {
      const divs = document.createElement('div');
      divs.style.height = `${this.randNums[i]}%`;
      this.container.appendChild(divs);
    }
  }
  clear() {
    this.container.innerHTML = '';
  }
}

export default DivGenerator;
