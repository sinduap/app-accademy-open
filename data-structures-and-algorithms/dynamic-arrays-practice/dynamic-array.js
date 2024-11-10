class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  unshift(val) {
    // Your code here
    const newData = new Array(this.capacity);
    for (let i = 0; i < this.data.length; i++) {
      newData[i] = this.data[i - 1] || val;
    }
    this.data = newData;
    this.length++;
  }
}

module.exports = DynamicArray;
