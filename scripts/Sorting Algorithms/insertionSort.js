import DivConfig from '../Utils/divConfig.js';
class InsertionSort {
  constructor() {
    this.arr = [];
  }
  start() {
    for (let i = 1; i < this.arr.length; i++) {
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'yellow',
      });

      let current = this.arr[i];
      let j = i - 1;
      while (j >= 0 && this.arr[j] > current) {
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'red',
        });
        new DivConfig({
          index: j + 1,
          height: this.arr[j + 1],
          color: 'red',
        });

        this.arr[j + 1] = this.arr[j];
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'red',
        });
        new DivConfig({
          index: j + 1,
          height: this.arr[j + 1],
          color: 'red',
        });

        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'blue',
        });
        if (j == i - 1) {
          new DivConfig({
            index: j + 1,
            height: this.arr[j + 1],
            color: 'yellow',
          });
        } else {
          new DivConfig({
            index: j + 1,
            height: this.arr[j + 1],
            color: 'blue',
          });
        }
        j--;
      }
      this.arr[j + 1] = current;

      for (let k = 0; k < i; k++) {
        new DivConfig({
          index: k,
          height: this.arr[k],
          color: 'green',
        });
      }
    }
    new DivConfig({
      index: this.arr.length - 1,
      height: this.arr[this.arr.length - 1],
      color: 'green',
    });
  }
}

export default InsertionSort;
