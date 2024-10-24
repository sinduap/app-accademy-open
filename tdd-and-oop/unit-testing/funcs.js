function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') throw new Error('Invalid number');
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  // Your code here
  return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter(
    n => n % step === 0
  );
}

module.exports = { isFive, isOdd, myRange };
