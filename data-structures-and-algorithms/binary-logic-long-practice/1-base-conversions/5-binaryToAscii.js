// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const convertToBase10 = str => {
  let [_, base, origin] = /(0[bx])([\da-fA-F]+)/i.exec(str);
  if (base === '0b') {
    base = 2;
  } else if (base === '0x') {
    base = 16;
  }
  let result = 0;
  for (const match of origin.matchAll(/[1-9a-fA-F]/g)) {
    const { index, input } = match;
    const curr = match[0];
    const currNumber = Number(curr) || 'abcdef'.indexOf(curr) + 10;
    result += base ** (input.length - index - 1) * currNumber;
  }
  return result;
};

const binaryToAscii = str => {
  // Your code here
  return String.fromCodePoint(
    ...binaryStringToArray(str).map(byte => convertToBase10('0b' + byte))
  );
};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(
  binaryToAscii(
    '010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'
  )
);
// 'Hello, world'
