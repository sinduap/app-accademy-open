const [addNums, addManyNums] = require('./phase-1');

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let result = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    result.push(addNums(i));
  }
  return result;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let result = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    result.push(addManyNums(i));
  }
  return result;
}

module.exports = [addNums10, addManyNums10];

console.log(addManyNums10(10));
