import { divColors } from '../Utils/Configs.js';
import DivConfig from '../Utils/divConfig.js';
class BubbleSort {
  constructor() {
    this.arr = [];
  }
  start() {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.arr.length - i - 1; j++) {
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: divColors.onProcess,
        });
        new DivConfig({
          index: j + 1,
          height: this.arr[j + 1],
          color: divColors.onProcess,
        });
        if (this.arr[j] > this.arr[j + 1]) {
          new DivConfig({
            index: j,
            height: this.arr[j],
            color: divColors.incorrect,
          });
          new DivConfig({
            index: j + 1,
            height: this.arr[j + 1],
            color: divColors.incorrect,
          });
          this.#swap({ firstIndex: j, secondIndex: j + 1 });
          new DivConfig({
            index: j,
            height: this.arr[j],
            color: divColors.incorrect,
          });
          new DivConfig({
            index: j + 1,
            height: this.arr[j + 1],
            color: divColors.incorrect,
          });
        }
        new DivConfig({
          index: j,
          height: this.arr[j],
          color: divColors.default,
        });
      }
      new DivConfig({
        index: this.arr.length - i - 1,
        height: this.arr[this.arr.length - i - 1],
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

export default BubbleSort;
