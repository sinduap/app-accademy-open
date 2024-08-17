function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  const result = [];

  for (let i = 1; i < arr.length; i += 2) {
    const element = arr[i];
    result.push(element);
  }

  return result;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  const result = [];
  const start = (arr.length - 1) % 2 === 0 ? arr.length - 2 : arr.length - 1;

  for (let i = start; i > 0; i -= 2) {
    const element = arr[i];
    result.push(element);
  }

  return result;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const result = [];

  for (let i = 1; i < arr.length; i = i * 2) {
    const element = arr[i];
    result.push(element);
  }

  return result;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const result = [];

  for (let i = 1; i < arr.length; i = i * n) {
    const element = arr[i];
    result.push(element);
  }

  return result;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const result = [];

  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    const element = arr[i];
    result.push(element);
  }

  return result;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here

  const result = [];

  for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
    const element = arr[i];
    result.push(element);
  }

  return result;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
