import { divColors } from '../Utils/Configs.js';
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
        color: divColors.incorrect,
      });
      for (let j = i + 1; j < this.arr.length; j++) {
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: divColors.onProcess,
        });
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: divColors.default,
        });
        if (this.arr[j] < this.arr[min]) {
          new DivConfig({
            index: min,
            height: this.arr[min],
            color: divColors.default,
          });
          min = j;
          new DivConfig({
            index: j,
            height: this.arr[j],
            color: divColors.incorrect,
          });
        }
      }
      if (min != i) {
        new DivConfig({
          index: i,
          height: this.arr[i],
          color: divColors.incorrect,
        });
        new DivConfig({
          index: min,
          height: this.arr[min],
          color: divColors.incorrect,
        });
        this.#swap({ firstIndex: i, secondIndex: min });
        new DivConfig({
          index: i,
          height: this.arr[i],
          color: divColors.incorrect,
        });
        new DivConfig({
          index: min,
          height: this.arr[min],
          color: divColors.incorrect,
        });
        new DivConfig({
          index: min,
          height: this.arr[min],
          color: divColors.default,
        });
      }
      new DivConfig({
        index: i,
        height: this.arr[i],
        color: divColors.correct,
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
