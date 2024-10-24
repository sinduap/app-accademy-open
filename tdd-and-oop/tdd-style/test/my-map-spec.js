// Your code here
const chai = require('chai');
const chaiSpies = require('chai-spies');
const myMap = require('../problems/my-map');
chai.use(chaiSpies);
const expect = chai.expect;

describe('myMap()', function () {
  const doubler = n => n * 2;
  const tripler = n => n * 3;
  const initialArray = [1, 2, 3, 4, 5];
  let mapSpy, doublerSpy, triplerSpy;

  beforeEach(function () {
    mapSpy = chai.spy.on(initialArray, 'map');
    doublerSpy = chai.spy.on(doubler);
    triplerSpy = chai.spy.on(tripler);
  });

  afterEach(function () {
    chai.spy.restore(initialArray, 'map');
    chai.spy.restore(doublerSpy);
    chai.spy.restore(triplerSpy);
  });

  it('should return a new array with callback applied to the input array', function () {
    let resultArray1 = initialArray.map(doubler);
    let resultArray2 = initialArray.map(tripler);
    expect(myMap(initialArray, doubler)).to.be.deep.equal(resultArray1);
    expect(myMap(initialArray, tripler)).to.be.deep.equal(resultArray2);
  });

  it('should not call build-in Array#map method', function () {
    myMap(initialArray, doublerSpy);
    myMap(initialArray, triplerSpy);
    expect(mapSpy).to.not.have.been.called();
  });

  it('should invoked passed-in callback once for each element in the passed-in array argument,', function () {
    myMap(initialArray, doublerSpy);
    myMap(initialArray, triplerSpy);
    expect(doublerSpy).to.have.been.called.exactly(initialArray.length);
    expect(triplerSpy).to.have.been.called.exactly(initialArray.length);
  });
});
