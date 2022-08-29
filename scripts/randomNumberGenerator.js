class RandomNumbers {
  constructor() {
    this.numbers = [];
    this.size = 0;
  }
  start() {
    while (this.numbers.length < this.size) {
      let randomNums = Math.floor(Math.random() * this.size) + 1;
      if (this.numbers.indexOf(randomNums) === -1)
        this.numbers.push(randomNums);
    }
  }
  clear() {
    this.numbers = [];
  }
}

export default RandomNumbers;
