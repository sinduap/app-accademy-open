// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  let [_, base, origin] = /(0[bx])([\da-f]+)/i.exec(str);
  if (base === '0b') {
    base = 2;
  } else if (base === '0x') {
    base = 16;
  }
  let result = 0;
  for (const match of origin.matchAll(/[1-9a-f]/gi)) {
    const { index } = match;
    const currDigit = match[0].replace(/[a-f\d]/i, match =>
      '0123456789abcdef'.indexOf(match)
    );
    result += base ** (origin.length - index - 1) * currDigit;
  }
  return result;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
