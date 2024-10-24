function myMap(inputArray, callback) {
  // Your code here
  const resultArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    resultArr.push(callback(inputArray.at(i), i));
  }
  return resultArr;
}

module.exports = myMap;
