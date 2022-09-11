import { divColors } from '../Utils/Configs.js';
import DivConfig from '../Utils/divConfig.js';

class MergeSort {
  constructor() {
    this.arr = [];
  }
  start() {
    this.#mergeSort(this.arr, 0, this.arr.length - 1);
  }
  #mergeSort(arr, beg, end) {
    if (beg < end) {
      let mid = Math.floor((beg + end) / 2);
      this.#mergeSort(arr, beg, mid);
      this.#mergeSort(arr, mid + 1, end);
      this.#merge(arr, beg, mid, end);
    }
  }
  #merge(arr, beg, mid, end) {
    let n1 = mid - beg + 1;
    let n2 = end - mid;
    let leftArray = new Array(n1);
    let rightArray = new Array(n2);
    for (let i = 0; i < n1; i++) {
      leftArray[i] = arr[beg + i];
    }
    for (let j = 0; j < n2; j++) {
      rightArray[j] = arr[mid + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = beg;

    new DivConfig({
      index: mid,
      height: this.arr[mid],
      color: divColors.onProcess,
    });
    while (i < n1 && j < n2) {
      if (leftArray[i] <= rightArray[j]) {
        arr[k] = leftArray[i];
        new DivConfig({
          index: k,
          height: this.arr[k],
          color: divColors.incorrect,
        });
        new DivConfig({
          index: k,
          height: this.arr[k],
          color: divColors.incorrect,
        });
        i++;
      } else {
        arr[k] = rightArray[j];
        new DivConfig({
          index: k,
          height: this.arr[k],
          color: divColors.incorrect,
        });
        new DivConfig({
          index: k,
          height: this.arr[k],
          color: divColors.incorrect,
        });
        j++;
      }
      new DivConfig({
        index: k,
        height: this.arr[k],
        color: divColors.incorrect,
      });
      new DivConfig({
        index: k,
        height: this.arr[k],
        color: divColors.correct,
      });
      k++;
    }

    while (i < n1) {
      arr[k] = leftArray[i];
      new DivConfig({
        index: k,
        height: this.arr[k],
        color: divColors.correct,
      });
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = rightArray[j];
      new DivConfig({
        index: k,
        height: this.arr[k],
        color: divColors.correct,
      });
      j++;
      k++;
    }
  }
}

export default MergeSort;
