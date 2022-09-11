class SortType {
  constructor() {
    this.type = {};
  }
  start() {
    if (this.#isObjEmpty(this.type)) {
      alert('Pick a Sorting Algorithm!');
      return;
    }
    this.type.start();
  }
  #isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
}

export default SortType;
