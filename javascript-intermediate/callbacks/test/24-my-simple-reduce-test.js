const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

const mySimpleReduce = require('../problems/24-my-simple-reduce.js');

describe('mySimpleReduce', function () {
  it('Should mimic the built-in Array#reduce', function () {
    let result1 = mySimpleReduce(
      [5, 3, 2, 4],
      function (sum, el) {
        return sum + el;
      },
      10
    );
    expect(result1).to.be.equal(24);

    let result2 = mySimpleReduce([4, 6, 2], function (product, el) {
      return product * el;
    });
    expect(result2).to.be.equal(48);

    let result3 = mySimpleReduce([4, 6, 2, 8, 3], function (max, el) {
      if (el > max) {
        return el;
      } else {
        return max;
      }
    });
    expect(result3).to.be.equal(8);
  });

  it('should not call the built-in Array#reduce', function () {
    const reduceSpy = chai.spy.on(Array.prototype, 'reduce');
    mySimpleReduce([1, 2, 3], function (sum, num) {
      return num + sum;
    });
    expect(reduceSpy).to.have.not.been.called();
  });
});
