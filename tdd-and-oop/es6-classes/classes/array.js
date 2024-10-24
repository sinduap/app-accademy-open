// Your code here
Array.prototype.isEqual = function (arr) {
  if (arr.length !== this.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr.at(i) !== this.at(i)) return false;
  }
  return true;
};
