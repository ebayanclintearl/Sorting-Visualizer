import DivConfig from '../Utils/divConfig.js';
class QuickSort {
  constructor() {
    this.arr = [];
  }
  start() {
    this.#quickSort({ qArr: this.arr, qLow: 0, qHigh: this.arr.length - 1 });
    console.log(this.arr);
  }
  #partition({ arr, low, high }) {
    let pivot = arr[high];
    let i = low - 1;
    new DivConfig({
      index: high,
      height: this.arr[high],
      color: 'orange',
    });
    for (let j = low; j <= high - 1; j++) {
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
      if (arr[j] < pivot) {
        i++;
        new DivConfig({
          index: i,
          height: this.arr[i],
          color: 'red',
        });
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'red',
        });
        this.#swap({ firstIndex: i, secondIndex: j });
        new DivConfig({
          index: i,
          height: this.arr[i],
          color: 'red',
        });
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'red',
        });
        new DivConfig({
          index: i,
          height: this.arr[i],
          color: 'aqua',
        });
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: 'aqua',
        });
      }
    }
    new DivConfig({
      index: i + 1,
      height: this.arr[i + 1],
      color: 'red',
    });
    new DivConfig({
      index: high,
      height: this.arr[high],
      color: 'red',
    });
    this.#swap({ firstIndex: i + 1, secondIndex: high });
    new DivConfig({
      index: i + 1,
      height: this.arr[i + 1],
      color: 'red',
    });
    new DivConfig({
      index: high,
      height: this.arr[high],
      color: 'red',
    });
    new DivConfig({
      index: i + 1,
      height: this.arr[i + 1],
      color: 'aqua',
    });
    new DivConfig({
      index: high,
      height: this.arr[high],
      color: 'aqua',
    });
    return i + 1;
  }
  #quickSort({ qArr, qLow, qHigh }) {
    if (qLow < qHigh) {
      let pi = this.#partition({ arr: qArr, low: qLow, high: qHigh });
      new DivConfig({
        index: pi,
        height: this.arr[pi],
        color: 'green',
      });
      new DivConfig({
        index: qLow,
        height: this.arr[qLow],
        color: 'green',
      });
      new DivConfig({
        index: qHigh,
        height: this.arr[qHigh],
        color: 'green',
      });
      this.#quickSort({ qArr: qArr, qLow: qLow, qHigh: pi - 1 });
      this.#quickSort({ qArr: qArr, qLow: pi + 1, qHigh: qHigh });
    }
  }
  #swap({ firstIndex, secondIndex }) {
    let tmp = this.arr[firstIndex];
    this.arr[firstIndex] = this.arr[secondIndex];
    this.arr[secondIndex] = tmp;
  }
}

export default QuickSort;
