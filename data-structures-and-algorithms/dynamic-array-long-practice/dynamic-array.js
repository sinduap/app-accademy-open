class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    if (this.capacity === this.length) this.resize();
    this.data[this.length] = val;
  }

  pop() {
    // Your code here
    const val = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    return val;
  }

  shift() {
    // Your code here
    const val = this.data[0];
    this.data = this.data.filter((val, i) => val && i);
    this.data.length = this.capacity;
    return val;
  }

  unshift(val) {
    // Your code here
    if (this.capacity === this.length) this.resize();
    const oldData = this.data.filter(val => val);
    this.data[0] = val;
    for (let i = 0; i < oldData.length; i++) {
      this.data[i + 1] = oldData[i];
    }
  }

  indexOf(val) {
    // Your code here
    return this.data.findIndex(value => val === value);
  }

  resize() {
    // Your code here
    this.capacity *= 2;
    this.data.length = this.capacity;
  }

  get length() {
    return this.data.filter(val => val).length;
  }
}

module.exports = DynamicArray;
