// _.each
const eachBtn = document.querySelector('#eachArrayBtn');
eachBtn.addEventListener('click',() => {
  let eachInput = document.querySelector('#eachArray').value;
  let eachArray = eachInput.split(",");
  let eachArray2 = new Array(eachArray.length) // creating trimmed array
  for (i=0; i < eachArray.length; i++) {
    eachArray2[i] = eachArray[i].trim();
  };
  let eachFn = document.querySelector('#eachFn').value;
  _.each(eachArray2, eval(eachFn));
});

// _.map
const mapBtn = document.querySelector('#mapArrayBtn');
let mapArrayResultSpan = document.querySelector('.mapArray span');
document.querySelector('#mapFn').value = 'num * 3';
mapBtn.addEventListener('click',() => {
  let mapInput = document.querySelector('#mapArray').value;
  let mapArray = mapInput.split(",");
  let mapArray2 = new Array(mapArray.length) // creating trimmed array
  for (i=0; i < mapArray.length; i++) {
    mapArray2[i] = mapArray[i].trim();
  };
  
  let mapFn = document.querySelector('#mapFn').value;
  let mapArrayResult = _.map(mapArray2, (num, index) => {
    return eval(mapFn);
  });
  mapArrayResultSpan.innerHTML = 'Result: ' + mapArrayResult;
});

// _.reduce
const reduceBtn = document.querySelector('#reduceArrayBtn');
document.querySelector('#reduceFn').value = 'memo * num';
reduceBtn.addEventListener('click',() => {
  let reduceInput = document.querySelector('#reduceArray').value;
  let reduceArray = reduceInput.split(",");
  let reduceArray2 = new Array(reduceArray.length) // creating trimmed array
  for (i=0; i < reduceArray.length; i++) {
    reduceArray2[i] = reduceArray[i].trim();
  };
  let reduceArrayResultSpan = document.querySelector('.reduceArray span');
  let reduceFn = document.querySelector('#reduceFn').value;
  let reduceArrayResult = _.reduce(reduceArray2, (memo, num) => { // memo is previous reduced number in the array (an accumulator)
    return eval(reduceFn);
  });
  reduceArrayResultSpan.innerHTML = 'Result: ' + reduceArrayResult;
});

// _.find
const findBtn = document.querySelector('#findArrayBtn');
findBtn.addEventListener('click',() => {
  let findInput = document.querySelector('#findArray').value;
  let findArray = findInput.split(",");
  let findArray2 = new Array(findArray.length) // creating trimmed array
  for (i=0; i < findArray.length; i++) {
    findArray2[i] = findArray[i].trim();
  };

  let findArrayFunction = document.querySelector('#findArrayFunction').value;
  // let findArrayFunction2 = new Function('return '+findArrayFunction);
  let findArrayResult = _.find(findArray2, (num) => {
    return eval(findArrayFunction); // num % 2 === 0;
  });
  let findArrayResultSpan = document.querySelector('.findArray span');
  findArrayResultSpan.innerHTML = 'Result: ' + findArrayResult;
});

// _.filter
const filterBtn = document.querySelector('#filterArrayBtn');
document.querySelector('#filterFn').value = 'num % 2 === 0';
filterBtn.addEventListener('click',() => {
  let filterInput = document.querySelector('#filterArray').value;
  let filterArray = filterInput.split(",");
  let filterArray2 = new Array(filterArray.length) // creating trimmed array
  for (i=0; i < filterArray.length; i++) {
    filterArray2[i] = filterArray[i].trim();
  };
  let filterArrayResultSpan = document.querySelector('.filterArray span');
  let filterFn = document.querySelector('#filterFn').value;
  let filterArrayResult = _.filter(filterArray2, (num) => {
    return eval(filterFn);
  });
  filterArrayResultSpan.innerHTML = 'Result: ' + filterArrayResult;
});

// _.findWhere
let findWhereArray = [
  {name: 'City of Thieves', author: 'David Benioff'},
  {name: 'The 25th Hour', author:'David Benioff'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben'}
];
findWhereInput.value = JSON.stringify(findWhereArray);
document.querySelector('#findWhereFn').value = JSON.stringify({author: 'David Benioff'});
let findWhereBtn = document.querySelector('#findWhereBtn');
findWhereBtn.addEventListener('click', () => {
  let findWhereInput = document.querySelector('#findWhereInput');
  findWhereArray = JSON.parse(findWhereInput.value);
  let findWhereFn = document.querySelector('#findWhereFn').value;
  let findWhereResult = _.findWhere(findWhereArray, JSON.parse(findWhereFn));
  let findWhereResultSpan = document.querySelector('.findWhere span');
  findWhereResultSpan.innerHTML = 'Result: ' + JSON.stringify(findWhereResult);
});

// _.where
let whereArray = [
  {name: 'City of Thieves', author: 'David Benioff'},
  {name: 'The 25th Hour', author:'David Benioff'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben'}
];
whereInput.value = JSON.stringify(whereArray);
document.querySelector('#whereFn').value = JSON.stringify({author: 'David Benioff'});
let whereBtn = document.querySelector('#whereBtn');
whereBtn.addEventListener('click', () => {
  let whereInput = document.querySelector('#whereInput');
  whereArray = JSON.parse(whereInput.value);
  let whereFn = document.querySelector('#whereFn').value;
  let whereResult = _.where(whereArray, JSON.parse(whereFn));
  let whereResultSpan = document.querySelector('.where span');
  whereResultSpan.innerHTML = 'Result: ' + JSON.stringify(whereResult);
});

// _.every
const everyBtn = document.querySelector('#everyBtn');
document.querySelector('#everyFn').value = 'num % 2 === 0';
everyBtn.addEventListener('click',() => {
  let everyInput = document.querySelector('#everyArray').value;
  let everyArray = everyInput.split(",");
  let everyArray2 = new Array(everyArray.length) // creating trimmed array
  for (i=0; i < everyArray.length; i++) {
    everyArray2[i] = everyArray[i].trim();
  };
  let everyArrayResultSpan = document.querySelector('.every span');
  let everyFn = document.querySelector('#everyFn').value;
  let everyArrayResult = _.every(everyArray2, (num) => {
    return eval(everyFn);
  });
  everyArrayResultSpan.innerHTML = 'Result: ' + everyArrayResult;
});

// _.some
const someBtn = document.querySelector('#someBtn');
document.querySelector('#someFn').value = 'num % 2 === 0';
someBtn.addEventListener('click',() => {
  let someInput = document.querySelector('#someArray').value;
  let someArray = someInput.split(",");
  let someArray2 = new Array(someArray.length) // creating trimmed array
  for (i=0; i < someArray.length; i++) {
    someArray2[i] = someArray[i].trim();
  };
  let someArrayResultSpan = document.querySelector('.some span');
  let someFn = document.querySelector('#someFn').value;
  let someArrayResult = _.some(someArray2, (num) => {
    return eval(someFn);
  });
  someArrayResultSpan.innerHTML = 'Result: ' + someArrayResult;
});

// _.contains
const containsBtn = document.querySelector('#containsBtn');
document.querySelector('#containsValue').value = '3';
containsBtn.addEventListener('click',() => {
  let containsInput = document.querySelector('#containsArray').value;
  let containsArray = containsInput.split(",");
  let containsArray2 = new Array(containsArray.length) // creating trimmed array
  for (i=0; i < containsArray.length; i++) {
    containsArray2[i] = containsArray[i].trim();
  };
  let containsArrayResultSpan = document.querySelector('.contains span');
  let containsValue = document.querySelector('#containsValue').value;
  let containsArrayResult = _.contains(containsArray2, containsValue);
  containsArrayResultSpan.innerHTML = 'Result: ' + containsArrayResult;
});

// _.invoke
const invokeBtn = document.querySelector('#invokeBtn');
invokeBtn.addEventListener('click',() => {
  let invokeArray = document.querySelector('#invokeArray').value;
  invokeArray = JSON.parse("["+invokeArray+"]");
  let invokeFn = document.querySelector('#invokeFn').value;
  let invokeResult = _.invoke(invokeArray, invokeFn);
  let invokeResultSpan = document.querySelector('.invoke span');
  invokeResultSpan.innerHTML = 'Result: ' + JSON.stringify(invokeResult);
});

// _.pluck
const pluckBtn = document.querySelector('#pluckBtn');
document.querySelector('#pluckInput').value = JSON.stringify([
  {name: 'City of Thieves', author: 'David Benioff'},
  {name: 'The 25th Hour', author:'David Benioff'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben'}
]);
pluckBtn.addEventListener('click',() => {
  let pluckArray = document.querySelector('#pluckInput').value;
  pluckArray = JSON.parse(pluckArray);
  let pluckFn = document.querySelector('#pluckFn').value;
  let pluckResult = _.pluck(pluckArray, pluckFn);
  let pluckResultSpan = document.querySelector('.pluck span');
  pluckResultSpan.innerHTML = 'Result: ' + JSON.stringify(pluckResult);
});

// _.max
const maxBtn = document.querySelector('#maxBtn');
document.querySelector('#maxInput').value = JSON.stringify([
  {name: 'City of Thieves', author: 'David Benioff', year: '2008'},
  {name: 'The 25th Hour', author:'David Benioff', year: '2000'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben', year: '2015'}
]);
maxBtn.addEventListener('click',() => {
  let maxArray = document.querySelector('#maxInput').value;
  maxArray = JSON.parse(maxArray);
  let maxFn = document.querySelector('#maxFn').value;
  let maxResult = _.max(maxArray, (elem) => {
    return eval('elem.'+maxFn);
  });
  let maxResultSpan = document.querySelector('.max span');
  maxResultSpan.innerHTML = 'Result: ' + JSON.stringify(maxResult);
});

// _.min
const minBtn = document.querySelector('#minBtn');
document.querySelector('#minInput').value = JSON.stringify([
  {name: 'City of Thieves', author: 'David Benioff', year: '2008'},
  {name: 'The 25th Hour', author:'David Benioff', year: '2000'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben', year: '2015'}
]);
minBtn.addEventListener('click',() => {
  let minArray = document.querySelector('#minInput').value;
  minArray = JSON.parse(minArray);
  let minFn = document.querySelector('#minFn').value;
  let minResult = _.min(minArray, (elem) => {
    return eval('elem.'+minFn);
  });
  let minResultSpan = document.querySelector('.min span');
  minResultSpan.innerHTML = 'Result: ' + JSON.stringify(minResult);
});

// _.sortBy
const sortByBtn = document.querySelector('#sortByBtn');
document.querySelector('#sortByInput').value = JSON.stringify([
  {name: 'City of Thieves', author: 'David Benioff', year: '2008'},
  {name: 'The 25th Hour', author:'David Benioff', year: '2000'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben', year: '2015'}
]);
sortByBtn.addEventListener('click',() => {
  let sortByArray = document.querySelector('#sortByInput').value;
  sortByArray = JSON.parse(sortByArray);
  let sortByFn = document.querySelector('#sortByFn').value;
  let sortByResult = _.sortBy(sortByArray, sortByFn);
  let sortByResultSpan = document.querySelector('.sortBy span');
  sortByResultSpan.innerHTML = 'Result: ' + JSON.stringify(sortByResult);
});

// _.groupBy
const groupByBtn = document.querySelector('#groupByBtn');
groupByBtn.addEventListener('click',() => {
  let groupByArray = document.querySelector('#groupByInput').value;
  groupByArray = JSON.parse('['+groupByArray+']');
  let groupByFn = document.querySelector('#groupByFn').value;
  let groupByResult = _.groupBy(groupByArray, (num) => {
    return eval(groupByFn);
  });
  let groupByResultSpan = document.querySelector('.groupBy span');
  groupByResultSpan.innerHTML = 'Result: ' + JSON.stringify(groupByResult);
});

// _.indexBy
const indexByBtn = document.querySelector('#indexByBtn');
document.querySelector('#indexByInput').value = JSON.stringify([
  {name: 'City of Thieves', author: 'David Benioff', year: '2008'},
  {name: 'The 25th Hour', author:'David Benioff', year: '2000'},
  {name: 'The Hidden Life of Trees', author:'Peter Wohlleben', year: '2015'}
]);
indexByBtn.addEventListener('click',() => {
  let indexByArray = document.querySelector('#indexByInput').value;
  indexByArray = JSON.parse(indexByArray);
  let indexByFn = document.querySelector('#indexByFn').value;
  let indexByResult = _.indexBy(indexByArray, indexByFn);
  let indexByResultSpan = document.querySelector('.indexBy span');
  indexByResultSpan.innerHTML = 'Result: ' + JSON.stringify(indexByResult);
});

// _.countBy
const countByBtn = document.querySelector('#countByBtn');
countByBtn.addEventListener('click',() => {
  let countByArray = document.querySelector('#countByInput').value;
  countByArray = JSON.parse('['+countByArray+']');
  let countByFn = document.querySelector('#countByFn').value;
  let countByResult = _.countBy(countByArray, (num) => {
    return eval(countByFn);
  });
  let countByResultSpan = document.querySelector('.countBy span');
  countByResultSpan.innerHTML = 'Result: ' + JSON.stringify(countByResult);
});

// _.shuffle
const shuffleBtn = document.querySelector('#shuffleBtn');
shuffleBtn.addEventListener('click',() => {
  let shuffleArray = document.querySelector('#shuffleInput').value;
  shuffleArray = JSON.parse('['+shuffleArray+']');
  let shuffleResult = _.shuffle(shuffleArray);
  let shuffleResultSpan = document.querySelector('.shuffle span');
  shuffleResultSpan.innerHTML = 'Result: ' + JSON.stringify(shuffleResult);
});

// _.sample
const sampleBtn = document.querySelector('#sampleBtn');
sampleBtn.addEventListener('click',() => {
  let sampleArray = document.querySelector('#sampleInput').value;
  sampleArray = JSON.parse('['+sampleArray+']');
  let sampleFn = document.querySelector('#sampleFn').value;
  let sampleResult = _.sample(sampleArray, sampleFn);
  let sampleResultSpan = document.querySelector('.sample span');
  sampleResultSpan.innerHTML = 'Result: ' + JSON.stringify(sampleResult);
});

// _.size
const sizeBtn = document.querySelector('#sizeBtn');
sizeBtn.addEventListener('click',() => {
  let sizeArray = document.querySelector('#sizeInput').value;
  sizeArray = JSON.parse('['+sizeArray+']');
  let sizeResult = _.sample(sizeArray);
  let sizeResultSpan = document.querySelector('.size span');
  sizeResultSpan.innerHTML = 'Result: ' + JSON.stringify(sizeResult);
});

// _.partition
const partitionBtn = document.querySelector('#partitionBtn');
partitionBtn.addEventListener('click',() => {
  let partitionArray = document.querySelector('#partitionInput').value;
  partitionArray = JSON.parse('['+partitionArray+']');
  let partitionFn = document.querySelector('#partitionFn').value;
  let partitionResult = _.partition(partitionArray, (num) => {
    return eval(partitionFn);
  });
  let partitionResultSpan = document.querySelector('.partition span');
  partitionResultSpan.innerHTML = 'Result: ' + JSON.stringify(partitionResult);
});

// _.compact
const compactBtn = document.querySelector('#compactBtn');
compactBtn.addEventListener('click',() => {
  let compactArray = document.querySelector('#compactInput').value;
  compactArray = JSON.parse('['+compactArray+']');
  let compactResult = _.compact(compactArray);
  let compactResultSpan = document.querySelector('.compact span');
  compactResultSpan.innerHTML = 'Result: ' + JSON.stringify(compactResult);
});