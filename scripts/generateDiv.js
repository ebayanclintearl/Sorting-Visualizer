class GenerateDiv {
  constructor({ container, quantity, randNums }) {
    this.quantity = quantity;
    this.randNums = randNums;
    this.container = container;
  }
  run() {
    for (let i = 0; i < this.quantity; i++) {
      const div = document.createElement('div');
      div.style.height = `${this.randNums[i]}%`;
      this.container.appendChild(div);
    }
  }
  reset() {
    this.container.innerHTML = '';
  }
}

export default GenerateDiv;
