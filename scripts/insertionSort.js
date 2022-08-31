class InsertionSort {
  static config = InsertionSort.config;
  constructor() {
    this.arr = this.arr;
  }
  start() {
    for (var i = 1; i < this.arr.length; i++) {
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

      for (let t = 0; t < i; t++) {
        new InsertionSort.config({
          index: t,
          height: this.arr[t],
          color: 'green',
        });
      }
    }
    new InsertionSort.config({
      index: i - 1,
      height: this.arr[i - 1],
      color: 'green',
    });
  }
}

export default InsertionSort;
