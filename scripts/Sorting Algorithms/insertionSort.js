import { divColors } from '../Utils/Configs.js';
import DivConfig from '../Utils/divConfig.js';
import { enableButtons } from '../Utils/helperBtns.js';
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
        color: divColors.onProcess,
      });
      new DivConfig({
        index: i,
        height: current,
        color: divColors.incorrect,
      });
      new DivConfig({
        index: j,
        height: this.arr[j],
        color: divColors.correct,
      });
      while (j >= 0 && this.arr[j] > current) {
        this.arr[j + 1] = this.arr[j];
        new DivConfig({
          index: j + 1,
          height: this.arr[j + 1],
          color: divColors.onProcess,
        });
        new DivConfig({
          index: j + 1,
          height: this.arr[j + 1],
          color: divColors.correct,
        });
        j--;
      }
      this.arr[j + 1] = current;
      new DivConfig({
        index: j + 1,
        height: this.arr[j + 1],
        color: divColors.incorrect,
      });
      new DivConfig({
        index: j + 1,
        height: this.arr[j + 1],
        color: divColors.correct,
      });
    }
    enableButtons();
  }
}

export default InsertionSort;
