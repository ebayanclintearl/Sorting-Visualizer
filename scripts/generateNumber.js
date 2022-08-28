const generateRandNums = {
  numbers: [],
  size: 0,
  start: function () {
    while (this.numbers.length < this.size) {
      let randomNums = Math.floor(Math.random() * 100) + 1;
      if (this.numbers.indexOf(randomNums) === -1)
        this.numbers.push(randomNums);
    }
  },
};

export default generateRandNums;
