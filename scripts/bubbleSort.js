class BubbleSort {
  static config = BubbleSort.config;
  constructor() {
    this.arr = this.arr;
  }
  start() {
    for (let i = 0; i < this.arr.length; i++) {
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
          this.swap({ firstIndex: j, secondIndex: j + 1 });
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
        index: this.arr.length - i - 1,
        height: this.arr[this.arr.length - i - 1],
        color: 'green',
      });
    }
  }
  swap({ firstIndex, secondIndex }) {
    let tmp = this.arr[firstIndex];
    this.arr[firstIndex] = this.arr[secondIndex];
    this.arr[secondIndex] = tmp;
  }
}

export default BubbleSort;
