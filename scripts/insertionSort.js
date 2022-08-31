class InsertionSort {
  static config = InsertionSort.config;
  constructor() {
    this.arr = this.arr;
  }
  start() {
    for (let i = 1; i < this.arr.length; i++) {
      new InsertionSort.config({
        index: i,
        height: this.arr[i],
        color: 'yellow',
      });

      let current = this.arr[i];
      let j = i - 1;
      while (j >= 0 && this.arr[j] > current) {
        new InsertionSort.config({
          index: j,
          height: this.arr[j],
          color: 'red',
        });
        new InsertionSort.config({
          index: j + 1,
          height: this.arr[j + 1],
          color: 'red',
        });

        this.arr[j + 1] = this.arr[j];
        new InsertionSort.config({
          index: j,
          height: this.arr[j],
          color: 'red',
        });
        new InsertionSort.config({
          index: j + 1,
          height: this.arr[j + 1],
          color: 'red',
        });

        new InsertionSort.config({
          index: j,
          height: this.arr[j],
          color: 'blue',
        });
        if (j == i - 1) {
          new InsertionSort.config({
            index: j + 1,
            height: this.arr[j + 1],
            color: 'yellow',
          });
        } else {
          new InsertionSort.config({
            index: j + 1,
            height: this.arr[j + 1],
            color: 'blue',
          });
        }
        j--;
      }
      this.arr[j + 1] = current;

      for (let k = 0; k < i; k++) {
        new InsertionSort.config({
          index: k,
          height: this.arr[k],
          color: 'green',
        });
      }
    }
    new InsertionSort.config({
      index: this.arr.length - 1,
      height: this.arr[this.arr.length - 1],
      color: 'green',
    });
  }
}

export default InsertionSort;
