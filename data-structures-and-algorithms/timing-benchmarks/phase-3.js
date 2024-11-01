const [addNums, addManyNums] = require('./phase-1');

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  // Your code here
  let result = [];
  let num = increment;
  for (let i = 0; i < 10; i++) {
    num = (i + 1) * increment;
    // console.time('addNums');
    const startTime = Date.now();
    result.push(addNums(num));
    const endTime = Date.now();
    // console.timeEnd('addNums');
    console.log(endTime - startTime);
  }
  return result;
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  // Your code here
  let result = [];
  let num = increment;
  for (let i = 0; i < 10; i++) {
    num = (i + 1) * increment;
    // console.time('addManyNums');
    const startTime = Date.now();
    result.push(addManyNums(num));
    const endTime = Date.now();
    // console.timeEnd('addManyNums');
    console.log(endTime - startTime);
  }
  return result;
}

function addNums100Timing(increment) {
  let result = [];
  let num = increment;
  for (let i = 0; i < 100; i++) {
    num = (i + 1) * increment;
    // console.time('addNums');
    const startTime = Date.now();
    result.push(addNums(num));
    const endTime = Date.now();
    // console.timeEnd('addNums');
    console.log(endTime - startTime);
  }
  return result;
}

function addManyNums100Timing(increment) {
  let result = [];
  let num = increment;
  for (let i = 0; i < 100; i++) {
    num = (i + 1) * increment;
    // console.time('addManyNums');
    const startTime = Date.now();
    result.push(addManyNums(num));
    const endTime = Date.now();
    // console.timeEnd('addManyNums');
    console.log(endTime - startTime);
  }
  return result;
}

let n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log('\n***********\n');

n = 5000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

n = 1000000;
console.log(`addNums(${n}): `);
addNums100Timing(1000000);

console.log('\n***********\n');

n = 5000;
console.log(`addManyNums(${n}): `);
addManyNums100Timing(5000);
