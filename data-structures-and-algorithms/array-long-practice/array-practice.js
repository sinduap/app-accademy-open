const findMinimum = arr => {
  // Your code here
  let min = arr.at(0);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = arr => {
  // Your code here
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const prev = result[i - 1] || 0;
    result.push(arr[i] + prev);
  }
  return result;
};

const evenNumOfChars = arr => {
  // Your code here
  const result = [];
  for (const char of arr) {
    if (char.length % 2 === 0) {
      result.push(char);
    }
  }
  return result.length;
};

const smallerThanCurr = arr => {
  // Your code here
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

const twoSum = (arr, target) => {
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
};

const secondLargest = arr => {
  // Your code here
  const sorted = arr.slice();
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (i === j) continue;
      if (sorted[i] < sorted[j]) {
        [sorted[j], sorted[i]] = [sorted[i], sorted[j]];
      }
    }
  }
  return sorted.at(-2);
};

const shuffle = arr => {
  // Your code here
  const shuffled = arr.slice();
  for (let i = 0; i < shuffled.length; i++) {
    let rand;
    do {
      rand = Math.floor(Math.random() * shuffled.length);
    } while (rand === i);
    [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
  }
  return shuffled;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
