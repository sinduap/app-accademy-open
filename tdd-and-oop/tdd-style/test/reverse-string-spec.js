// Your code here
const chai = require('chai');
const reverseString = require('../problems/reverse-string');
const expect = chai.expect;

describe('reverseString()', function () {
  it('should reverse string', function () {
    expect(reverseString('fun')).to.be.equal('nuf');
  });

  it('should throw an error if argument is not a string', function () {
    expect(() => reverseString(543)).to.throw('Invalid string!');
    expect(() => reverseString(543)).to.throw(TypeError);
  });
});
