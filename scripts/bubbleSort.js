class BubbleSort {
  static config = BubbleSort.config;
  constructor() {
    this.arr = this.arr;
  }
  start() {
    for (let i = 0; i < this.arr.length - 1; i++) {
      for (var j = 0; j < this.arr.length - i - 1; j++) {
        new BubbleSort.config({
          index: j,
          height: this.arr[j],
          color: 'yellow',
        });
        if (this.arr[j] > this.arr[j + 1]) {
          new BubbleSort.config({
            index: j,
            height: this.arr[j],
            color: 'red',
          });
          new BubbleSort.config({
            index: j + 1,
            height: this.arr[j + 1],
            color: 'red',
          });
          let tmp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = tmp;
          new BubbleSort.config({
            index: j,
            height: this.arr[j],
            color: 'red',
          });
          new BubbleSort.config({
            index: j + 1,
            height: this.arr[j + 1],
            color: 'red',
          });
        }
        new BubbleSort.config({
          index: j,
          height: this.arr[j],
          color: 'blue',
        });
      }
      new BubbleSort.config({
        index: j,
        height: this.arr[j],
        color: 'green',
      });
    }
    new BubbleSort.config({
      index: 0,
      height: this.arr[0],
      color: 'green',
    });
  }
}

export default BubbleSort;
