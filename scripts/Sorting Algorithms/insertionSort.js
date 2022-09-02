import DivConfig from '../Utils/divConfig.js';
class InsertionSort {
  constructor() {
    this.arr = [];
  }
  start() {
    for (let i = 1; i < this.arr.length; i++) {
      let current = this.arr[i];
      let j = i - 1;
      new DivConfig({
        index: i,
        height: current,
        color: 'orange',
      });
      new DivConfig({
        index: i,
        height: current,
        color: 'red',
      });
      new DivConfig({
        index: j,
        height: this.arr[j],
        color: 'green',
      });
      while (j >= 0 && this.arr[j] > current) {
        this.arr[j + 1] = this.arr[j];
        new DivConfig({
          index: j + 1,
          height: this.arr[j + 1],
          color: 'orange',
        });
        new DivConfig({
          index: j + 1,
          height: this.arr[j + 1],
          color: 'green',
        });
        j--;
      }
      this.arr[j + 1] = current;
      new DivConfig({
        index: j + 1,
        height: this.arr[j + 1],
        color: 'red',
      });
      new DivConfig({
        index: j + 1,
        height: this.arr[j + 1],
        color: 'green',
      });
    }
  }
}

export default InsertionSort;
