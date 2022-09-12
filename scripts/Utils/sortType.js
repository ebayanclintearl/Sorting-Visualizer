class SortType {
  constructor() {
    this.type = {};
  }
  start() {
    if (this.isObjEmpty()) {
      alert('Pick a Sorting Algorithm!');
      return;
    }
    this.type.start();
  }
  isObjEmpty() {
    return Object.keys(this.type).length === 0;
  }
}

export default SortType;
