const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const convertToBase2 = element => {
  // Your code here
  let result = '',
    quotient;
  do {
    quotient = Math.floor(element / 2);
    const remainder = element % 2;
    result = remainder + result;
  } while ((element = quotient));
  return '0b' + result;
};

const asciiTo8bit = str => {
  // Your code here
  return Array.from(str)
    .map(str => str.codePointAt(0))
    .map(convertToBase2)
    .map(binary => addZeros(binary.slice(2), 8))
    .join('');
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
