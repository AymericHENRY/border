const tabsClassic = [
  [5,4,4],
  [4,3,4],
  [3,2,4],
  [2,2,2],
  [3,3,4],
  [1,4,4],
  [4,1,1],
];

const spiral = [
  [4,4,4],
  [4,3,4],
  [3,2,4],
  [4,4,4],
  [3,3,2],
  [1,3,2],
  [1,3,1],
];

const getRandom = max => Math.floor(Math.random() * max)

const getArrayRandomize = (n, m, max) => {
  const array = []
  for (let i = 0; i < n; i++) {
    let tab = []
    for (let j = 0; j < m ; j++) {
      tab.push(getRandom(max))
    }
    array.push(tab)
  }

  return array;
}


getBorderOfTheCountry = (i, j, arrayRef, arrayToModify, valueToCompare, countryIndex) => {
  if (arrayRef[i][j] === valueToCompare && arrayToModify[i][j] === 0) {
    arrayToModify[i][j] = countryIndex;

    // Check Right
    if (j < arrayRef[0].length - 1) {
        getBorderOfTheCountry(i, j + 1, arrayRef, arrayToModify, valueToCompare, countryIndex);
    }
    // Check Left
    if (j >= 1) {
        getBorderOfTheCountry(i, j - 1, arrayRef, arrayToModify, valueToCompare, countryIndex);
    }
    // Check Top
    if (i >= 1) {
        getBorderOfTheCountry(i - 1, j, arrayRef, arrayToModify, valueToCompare, countryIndex);
    }
    // Check Bottom
    if (i < arrayRef.length - 1) {
        getBorderOfTheCountry(i + 1, j, arrayRef, arrayToModify, valueToCompare, countryIndex);
    }
  }
  return;
}

const getNbOfCountry = arrayCountry => {
  // Check array
  if (!Array.isArray(arrayCountry) && arrayCountry.length === 0 && !Array.isArray(arrayCountry[0]) && arrayCountry[0].length === 0) {
    return 0;
  }

  let nbOfCountry = 0;
  let arrayBorder = [];
  const nLength = arrayCountry.length;
  const mLength = arrayCountry[0].length;

  // init arrayBorder at 0
  for (let i = 0; i < nLength; i++) {
    let tab = []
    for (let j = 0; j < mLength; j++) {
      tab.push(0);
    }
    arrayBorder.push(tab)
  }

  for (let i = 0; i < nLength; i++) {
    for (let j = 0; j < mLength; j++) {
      if (arrayBorder[i][j] === 0) {
        nbOfCountry++;
        getBorderOfTheCountry(i, j, arrayCountry, arrayBorder, arrayCountry[i][j], nbOfCountry);
      }
    }
  }

  return nbOfCountry;
}

let temp = 0;

console.log('------------~/Documents/border.js/12------------------');
console.time();
temp = getNbOfCountry(tabsClassic);
console.timeEnd();
console.log('Sould get 11', temp === 11)
console.log('------------------------------');

console.log('------------~/Documents/border.js/12------------------');
console.time();
temp = getNbOfCountry(spiral);
console.timeEnd();
console.log('Sould get 8', temp  === 8)
console.log('------------------------------');

