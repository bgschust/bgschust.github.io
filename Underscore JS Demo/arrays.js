// _.first
const firstBtn = document.querySelector('#firstBtn');
firstBtn.addEventListener('click',() => {
  let firstArray = document.querySelector('#firstInput').value;
  firstArray = JSON.parse('['+firstArray+']');
  let firstValue = document.querySelector('#firstValue').value;
  let firstResult = _.first(firstArray, firstValue);
  let firstResultSpan = document.querySelector('.first span');
  firstResultSpan.innerHTML = 'Result: ' + JSON.stringify(firstResult);
});

// _.initial
const initialBtn = document.querySelector('#initialBtn');
initialBtn.addEventListener('click',() => {
  let initialArray = document.querySelector('#initialInput').value;
  initialArray = JSON.parse('['+initialArray+']');
  let initialValue = document.querySelector('#initialValue').value;
  let initialResult = _.initial(initialArray, initialValue);
  let initialResultSpan = document.querySelector('.initial span');
  initialResultSpan.innerHTML = 'Result: ' + JSON.stringify(initialResult);
});

// _.last
const lastBtn = document.querySelector('#lastBtn');
lastBtn.addEventListener('click',() => {
  let lastArray = document.querySelector('#lastInput').value;
  lastArray = JSON.parse('['+lastArray+']');
  let lastValue = document.querySelector('#lastValue').value;
  let lastResult = _.last(lastArray, lastValue);
  let lastResultSpan = document.querySelector('.last span');
  lastResultSpan.innerHTML = 'Result: ' + JSON.stringify(lastResult);
});

// _.rest
const restBtn = document.querySelector('#restBtn');
restBtn.addEventListener('click',() => {
  let restArray = document.querySelector('#restInput').value;
  restArray = JSON.parse('['+restArray+']');
  let restValue = document.querySelector('#restValue').value;
  let restResult = _.rest(restArray, restValue);
  let restResultSpan = document.querySelector('.rest span');
  restResultSpan.innerHTML = 'Result: ' + JSON.stringify(restResult);
});

// _.flatten
const flattenBtn = document.querySelector('#flattenBtn');
flattenBtn.addEventListener('click',() => {
  let flattenArray = document.querySelector('#flattenInput').value;
  flattenArray = JSON.parse('['+flattenArray+']');
  let flattenValue = document.querySelector('#flattenValue').value;
  let flattenResult = _.flatten(flattenArray, flattenValue);
  let flattenResultSpan = document.querySelector('.flatten span');
  flattenResultSpan.innerHTML = 'Result: ' + JSON.stringify(flattenResult);
});

// _.without
const withoutBtn = document.querySelector('#withoutBtn');
withoutBtn.addEventListener('click',() => {
  let withoutArray = document.querySelector('#withoutInput').value;
  withoutArray = JSON.parse('['+withoutArray+']');
  let withoutValue = document.querySelector('#withoutValue').value;
  let withoutResult = _.without(withoutArray, eval(withoutValue));
  let withoutResultSpan = document.querySelector('.without span');
  withoutResultSpan.innerHTML = 'Result: ' + JSON.stringify(withoutResult);
});

// _.union
const unionBtn = document.querySelector('#unionBtn');
unionBtn.addEventListener('click',() => {
  let unionArray = document.querySelector('#unionInput').value;
  unionArray = JSON.parse('['+unionArray+']');
  unionArray = _.flatten(unionArray);
  let unionResult = _.union(unionArray);
  let unionResultSpan = document.querySelector('.union span');
  unionResultSpan.innerHTML = 'Result: ' + JSON.stringify(unionResult);
});

// _.intersection
const intersectionBtn = document.querySelector('#intersectionBtn');
intersectionBtn.addEventListener('click',() => {
  let intersectionArray = document.querySelector('#intersectionInput').value;
  intersectionArray = JSON.parse('['+intersectionArray+']');
  intersectionArray = _.flatten(intersectionArray);
  let intersectionResult = _.intersection(intersectionArray);
  let intersectionResultSpan = document.querySelector('.intersection span');
  intersectionResultSpan.innerHTML = 'Result: ' + JSON.stringify(intersectionResult);
});

// _.difference
const differenceBtn = document.querySelector('#differenceBtn');
differenceBtn.addEventListener('click',() => {
  let differenceArray = document.querySelector('#differenceInput').value;
  differenceArray = JSON.parse('['+differenceArray+']');
  let differenceValue = document.querySelector('#differenceValue').value;
  differenceValue = JSON.parse('['+differenceValue+']');
  let differenceResult = _.difference(differenceArray, differenceValue);
  let differenceResultSpan = document.querySelector('.difference span');
  differenceResultSpan.innerHTML = 'Result: ' + JSON.stringify(differenceResult);
});

// _.uniq
const uniqBtn = document.querySelector('#uniqBtn');
uniqBtn.addEventListener('click',() => {
  let uniqArray = document.querySelector('#uniqInput').value;
  uniqArray = JSON.parse('['+uniqArray+']');
  let uniqResult = _.uniq(uniqArray);
  let uniqResultSpan = document.querySelector('.uniq span');
  uniqResultSpan.innerHTML = 'Result: ' + JSON.stringify(uniqResult);
});

// _.zip
const zipBtn = document.querySelector('#zipBtn');
zipBtn.addEventListener('click',() => {
  let zipArray = document.querySelector('#zipInput').value;
  zipArray = JSON.parse('['+zipArray+']');
  // let zipArrayString = 'zipArray[0]';
  // for(i=1; i < zipArray.length; i++) {
  //   zipArrayString = zipArrayString + ', '+zipArray[i];
  // }
  let zipResult = _.zip(zipArray[0], zipArray[1], zipArray[2]);
  let zipResultSpan = document.querySelector('.zip span');
  zipResultSpan.innerHTML = 'Result: ' + JSON.stringify(zipResult);
});

// _.unzip
const unzipBtn = document.querySelector('#unzipBtn');
unzipBtn.addEventListener('click',() => {
  let unzipArray = document.querySelector('#unzipInput').value;
  unzipArray = JSON.parse('['+unzipArray+']');
  let unzipResult = _.unzip(unzipArray) // _.unzip(unzipArray[0], unzipArray[1], unzipArray[2]);
  let unzipResultSpan = document.querySelector('.unzip span');
  unzipResultSpan.innerHTML = 'Result: ' + JSON.stringify(unzipResult);
});

// _.object
const objectBtn = document.querySelector('#objectBtn');
objectBtn.addEventListener('click',() => {
  let objectArray = document.querySelector('#objectInput').value;
  console.log(objectArray)
  objectArray = JSON.parse('['+objectArray+']');
  console.log(objectArray)
  let objectResult = _.object(objectArray);
  let objectResultSpan = document.querySelector('.object span');
  objectResultSpan.innerHTML = 'Result: ' + JSON.stringify(objectResult);
});

// _.chunk
const chunkBtn = document.querySelector('#chunkBtn');
chunkBtn.addEventListener('click',() => {
  let chunkArray = document.querySelector('#chunkInput').value;
  chunkArray = JSON.parse('['+chunkArray+']');
  let chunkValue = document.querySelector('#chunkValue').value;
  chunkValue = Number(chunkValue);
  let chunkResult = _.chunk(chunkArray, chunkValue);
  let chunkResultSpan = document.querySelector('.chunk span');
  chunkResultSpan.innerHTML = 'Result: ' + JSON.stringify(chunkResult);
});

// _.indexOf
const indexOfBtn = document.querySelector('#indexOfBtn');
indexOfBtn.addEventListener('click',() => {
  let indexOfArray = document.querySelector('#indexOfInput').value;
  indexOfArray = JSON.parse('['+indexOfArray+']');
  let indexOfValue = document.querySelector('#indexOfValue').value;
  indexOfValue = Number(indexOfValue);
  let indexOfResult = _.indexOf(indexOfArray, indexOfValue);
  let indexOfResultSpan = document.querySelector('.indexOf span');
  indexOfResultSpan.innerHTML = 'Result: ' + JSON.stringify(indexOfResult);
});

// _.lastIndexOf
const lastIndexOfBtn = document.querySelector('#lastIndexOfBtn');
lastIndexOfBtn.addEventListener('click',() => {
  let lastIndexOfArray = document.querySelector('#lastIndexOfInput').value;
  lastIndexOfArray = JSON.parse('['+lastIndexOfArray+']');
  let lastIndexOfValue = document.querySelector('#lastIndexOfValue').value;
  lastIndexOfValue = Number(lastIndexOfValue);
  let lastIndexOfResult = _.lastIndexOf(lastIndexOfArray, lastIndexOfValue);
  let lastIndexOfResultSpan = document.querySelector('.lastIndexOf span');
  lastIndexOfResultSpan.innerHTML = 'Result: ' + JSON.stringify(lastIndexOfResult);
});

// _.sortedIndex
const sortedIndexBtn = document.querySelector('#sortedIndexBtn');
sortedIndexBtn.addEventListener('click',() => {
  let sortedIndexArray = document.querySelector('#sortedIndexInput').value;
  sortedIndexArray = JSON.parse('['+sortedIndexArray+']');
  let sortedIndexValue = document.querySelector('#sortedIndexValue').value;
  sortedIndexValue = Number(sortedIndexValue);
  let sortedIndexResult = _.sortedIndex(sortedIndexArray, sortedIndexValue);
  let sortedIndexResultSpan = document.querySelector('.sortedIndex span');
  sortedIndexResultSpan.innerHTML = 'Result: ' + JSON.stringify(sortedIndexResult);
});

// _.findIndex
const findIndexBtn = document.querySelector('#findIndexBtn');
findIndexBtn.addEventListener('click',() => {
  let findIndexArray = document.querySelector('#findIndexInput').value;
  findIndexArray = JSON.parse('['+findIndexArray+']');
  let findIndexFn = document.querySelector('#findIndexFn').value;
  let findIndexResult = _.findIndex(findIndexArray, findIndexFn);
  let findIndexResultSpan = document.querySelector('.findIndex span');
  findIndexResultSpan.innerHTML = 'Result: ' + JSON.stringify(findIndexResult);
});

// _.findLastIndex
const findLastIndexBtn = document.querySelector('#findLastIndexBtn');
document.querySelector('#findLastIndexInput').value = JSON.stringify([
  {name: 'City of Thieves', author: 'David Benioff', year: '2008'},
  {name: 'The 25th Hour', author:'David Benioff', year: '2000'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben', year: '2015'}
]);
findLastIndexBtn.addEventListener('click',() => {
  let findLastIndexArray = document.querySelector('#findLastIndexInput').value;
  findLastIndexArray = JSON.parse(findLastIndexArray);
  let findLastIndexFn = document.querySelector('#findLastIndexFn').value;
  findLastIndexFn = JSON.parse(findLastIndexFn);
  let findLastIndexResult = _.findLastIndex(findLastIndexArray, findLastIndexFn);
  let findLastIndexResultSpan = document.querySelector('.findLastIndex span');
  findLastIndexResultSpan.innerHTML = 'Result: ' + JSON.stringify(findLastIndexResult);
});

// _.range
const rangeBtn = document.querySelector('#rangeBtn');
rangeBtn.addEventListener('click',() => {
  let rangeValue1 = document.querySelector('#rangeValue1').value;
  rangeValue1 = Number(rangeValue1);
  let rangeValue2 = document.querySelector('#rangeValue2').value;
  rangeValue2 = Number(rangeValue2);
  let rangeValue3 = document.querySelector('#rangeValue3').value;
  rangeValue3 = Number(rangeValue3);
  let rangeResult = _.range(rangeValue1, rangeValue2, rangeValue3);
  let rangeResultSpan = document.querySelector('.range span');
  rangeResultSpan.innerHTML = 'Result: ' + JSON.stringify(rangeResult);
});