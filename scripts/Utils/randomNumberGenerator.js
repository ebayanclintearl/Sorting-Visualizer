class RandomNumbers {
  constructor() {
    this.numbers = [];
    this.config = {};
  }
  start() {
    let result = this.#range(1, this.config.size, this.config.step);
    this.#shuffleArray(result);
    this.numbers = result;
  }
  #range(start, end, step) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => (start + idx) * step);
  }
  #shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  clear() {
    this.numbers = [];
  }
}

export default RandomNumbers;
