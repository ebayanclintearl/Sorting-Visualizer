import DivConfig from '../Utils/divConfig.js';
class SelectionSort {
  constructor() {
    this.arr = [];
  }
  start() {
    for (let i = 0; i < this.arr.length; i++) {
      let min = i;
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'red',
      });
      for (let j = i + 1; j < this.arr.length; j++) {
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'orange',
        });
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'aqua',
        });
        if (this.arr[j] < this.arr[min]) {
          new DivConfig({
            index: min,
            height: this.arr[min],
            color: 'aqua',
          });
          min = j;
          new DivConfig({
            index: j,
            height: this.arr[j],
            color: 'red',
          });
        }
      }
      if (min != i) {
        new DivConfig({
          index: i,
          height: this.arr[i],
          color: 'red',
        });
        new DivConfig({
          index: min,
          height: this.arr[min],
          color: 'red',
        });
        this.#swap({ firstIndex: i, secondIndex: min });
        new DivConfig({
          index: i,
          height: this.arr[i],
          color: 'red',
        });
        new DivConfig({
          index: min,
          height: this.arr[min],
          color: 'red',
        });
        new DivConfig({
          index: min,
          height: this.arr[min],
          color: 'aqua',
        });
      }
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: 'green',
      });
    }
  }
  #swap({ firstIndex, secondIndex }) {
    let tmp = this.arr[firstIndex];
    this.arr[firstIndex] = this.arr[secondIndex];
    this.arr[secondIndex] = tmp;
  }
}

export default SelectionSort;
