import DivConfig from '../Utils/divConfig.js';
class HeapSort {
  constructor() {
    this.arr = [];
  }
  start() {
    this.#sort();
    console.log(this.arr);
  }
  #sort() {
    var N = this.arr.length;

    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
      this.#heapify(N, i);
    }
    for (let i = N - 1; i > -1; i--) {
      let temp = this.arr[0];
      this.arr[0] = this.arr[i];
      this.arr[i] = temp;
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'green',
      });
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'yellow',
      });
      this.#heapify(i, 0);
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'green',
      });
    }
  }
  #heapify(N, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < N && this.arr[l] > this.arr[largest]) {
      largest = l;
    }
    if (r < N && this.arr[r] > this.arr[largest]) {
      largest = r;
    }
    if (largest != i) {
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'red',
      });
      new DivConfig({
        index: largest,
        height: this.arr[largest],
        color: 'red',
      });

      let swap = this.arr[i];
      this.arr[i] = this.arr[largest];
      this.arr[largest] = swap;

      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'red',
      });
      new DivConfig({
        index: largest,
        height: this.arr[largest],
        color: 'red',
      });
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'aqua',
      });
      new DivConfig({
        index: largest,
        height: this.arr[largest],
        color: 'aqua',
      });

      this.#heapify(N, largest);
    }
  }
}

export default HeapSort;
