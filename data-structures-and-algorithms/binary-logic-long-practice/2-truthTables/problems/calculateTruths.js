const {
  or,
  and,
  calculateTruthTable,
} = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// Update arguments to calculate and console.log returned value
const not = val => Number(!val);

const table1 = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const table2 = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 1],
];

function func1([a, b]) {
  return calculateTruthTable(
    calculateTruthTable(a, not),
    or,
    calculateTruthTable(a, and, b)
  );
}

table1.map(func1).forEach(res => console.log(res));

console.log('---');

function func2([a, b]) {
  return calculateTruthTable(b, or, calculateTruthTable(a, not));
}

table1.map(func2).forEach(res => console.log(res));

console.log('---');

function func3([a, b]) {
  return calculateTruthTable(
    calculateTruthTable(a, and, calculateTruthTable(b, not)),
    not
  );
}
table1.map(func3).forEach(res => console.log(res));

console.log('---');

function func4([a, b]) {
  return calculateTruthTable(
    calculateTruthTable(a, or, calculateTruthTable(b, not)),
    not
  );
}
table1.map(func4).forEach(res => console.log(res));

console.log('---');

function func5([a, _b]) {
  return calculateTruthTable(a, or, calculateTruthTable(a, not));
}
table1.map(func5).forEach(res => console.log(res));

console.log('---');

function func6([_a, b]) {
  return calculateTruthTable(b, and, calculateTruthTable(b, not));
}
table1.map(func6).forEach(res => console.log(res));

console.log('---');

function func7([a, b, c]) {
  return calculateTruthTable(
    calculateTruthTable(a, and, b),
    or,
    calculateTruthTable(c, not)
  );
}

table2.map(func7).forEach(res => console.log(res));

console.log('---');

function func8([a, b, c]) {
  return calculateTruthTable(
    calculateTruthTable(a, not),
    or,
    calculateTruthTable(b, and, c)
  );
}

table2.map(func8).forEach(res => console.log(res));
