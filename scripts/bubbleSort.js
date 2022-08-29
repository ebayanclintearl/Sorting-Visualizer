import GeneratedDivConfig from './generatedDivConfig.js';
import { generateDivs } from './main.js';
function bubbleSort() {
  let heightArr = generateDivs.divHeights;

  for (let i = 0; i < heightArr.length - 1; i++) {
    for (var j = 0; j < heightArr.length - i - 1; j++) {
      new GeneratedDivConfig({
        index: j,
        height: heightArr[j],
        color: 'yellow',
      });
      if (heightArr[j] > heightArr[j + 1]) {
        new GeneratedDivConfig({
          index: j,
          height: heightArr[j],
          color: 'red',
        });
        new GeneratedDivConfig({
          index: j + 1,
          height: heightArr[j + 1],
          color: 'red',
        });
        let tmp = heightArr[j];
        heightArr[j] = heightArr[j + 1];
        heightArr[j + 1] = tmp;
        new GeneratedDivConfig({
          index: j,
          height: heightArr[j],
          color: 'red',
        });
        new GeneratedDivConfig({
          index: j + 1,
          height: heightArr[j + 1],
          color: 'red',
        });
      }
      new GeneratedDivConfig({
        index: j,
        height: heightArr[j],
        color: 'blue',
      });
    }
    new GeneratedDivConfig({
      index: j,
      height: heightArr[j],
      color: 'green',
    });
  }
  new GeneratedDivConfig({
    index: 0,
    height: heightArr[0],
    color: 'green',
  });
}

export default bubbleSort;
