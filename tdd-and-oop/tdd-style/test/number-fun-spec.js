// Your code here
const chai = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');
const expect = chai.expect;

describe('returnsThree()', function () {
  it('should return 3', function () {
    expect(returnsThree()).to.be.equal(3);
  });
});

describe('reciprocal()', () => {
  it('should return the reciprocal of the given input', function () {
    expect(reciprocal(3)).to.equal(1 / 3);
    expect(reciprocal(6)).to.equal(1 / 6);
    expect(reciprocal(9)).to.equal(1 / 9);
  });

  context('invalid input', function () {
    it('should throw an RangeError, if given input is less than 1', function () {
      expect(() => reciprocal(0)).to.throw(RangeError);
      expect(() => reciprocal(-1)).to.throw(
        'Must be a value between 1 and 1000000'
      );
    });

    it('should throw an RangeError, if given input is greater than 1000000', function () {
      expect(() => reciprocal(1000001)).to.throw(RangeError);
      expect(() => reciprocal(1000002)).to.throw(
        'Must be a value between 1 and 1000000'
      );
    });
  });

  context('valid input', function () {
    it('should not throw an error if given valid input', function () {
      expect(() => reciprocal(1000000)).to.not.throw();
      expect(() => reciprocal(1)).to.not.throw();
    });
  });
});
