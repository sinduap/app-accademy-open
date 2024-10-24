// Your code here
const chai = require('chai');
const Person = require('../problems/person');
const expect = chai.expect;

describe('Person class', function () {
  let mai, erin, john, mark;

  beforeEach(() => {
    mai = new Person('Mai', 23);
    erin = new Person('Erin', 18);
  });

  describe('constructor', function () {
    it('should have name and age property', function () {
      expect(mai).to.have.own.all.keys('name', 'age');
      expect(erin).to.have.own.all.keys('name', 'age');
    });

    it('should have correct value', function () {
      expect(mai.name).to.equal('Mai');
      expect(mai.age).to.equal(23);
      expect(erin.name).to.equal('Erin');
      expect(erin.age).to.equal(18);
    });
  });

  describe('sayHello() instance method', function () {
    it('should return name and greeting message', function () {
      expect(mai.sayHello()).to.equal('Mai say hello');
      expect(erin.sayHello()).to.equal('Erin say hello');
    });
  });

  describe('visit() instance method', () => {
    it('should return a string stating that this instance visited the passed-in person instance', function () {
      expect(mai.visit(erin)).to.equal('Mai visited Erin');
      expect(erin.visit(mai)).to.equal('Erin visited Mai');
    });
  });

  describe('switchVisit() instance method', function () {
    it('should invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument', function () {
      expect(mai.switchVisit(erin)).to.equal('Erin visited Mai');
      expect(erin.switchVisit(mai)).to.equal('Mai visited Erin');
    });
  });

  describe('update() instance method', function () {
    context('invalid input', function () {
      it('should throw a new TypeError if the incoming argument is not an object', function () {
        expect(() => mai.update(null)).to.throw;
        expect(() => mai.update([])).to.throw(TypeError);
        expect(() => mai.update('Mailinda')).throw(
          'Invalid input, must be an object'
        );
      });

      it('should throw a new TypeError if the incoming object does not have a name and an age property', function () {
        expect(() => erin.update({})).to.throw;
        expect(() => erin.update({ name: 'Erina' })).to.throw(TypeError);
        expect(() => erin.update({ age: 30 })).throw(
          'Input must have name and age property'
        );
      });
    });

    context('valid input', function () {
      it("should update the instance's properties match the passed-in object", function () {
        mai.update({ name: 'Melinda', age: 29 });
        erin.update({ name: 'Erina', age: 19 });
        expect(mai.name).to.be.equal('Melinda');
        expect(mai.age).to.be.equal(29);
        expect(erin.name).to.be.equal('Erina');
        expect(erin.age).to.be.equal(19);
      });
    });
  });

  describe('tryUpdate() instance method', function () {
    context('unsuccess update', function () {
      it('should return false, indicating the update was unsuccessful', function () {
        const isMaiUpdated = mai.tryUpdate({ age: 32 });
        const isErinUpdated = erin.tryUpdate('Erina');
        expect(isMaiUpdated).to.be.false;
        expect(isErinUpdated).to.be.false;
        expect(mai.name).to.be.equal('Mai');
        expect(mai.age).to.be.not.equal(32);
        expect(erin.name).to.be.not.equal('Erina');
        expect(erin.age).to.be.equal(18);
      });
    });

    context('success update', function () {
      it('should return true, indicating the update was successful', function () {
        const isMaiUpdated = mai.tryUpdate({ name: 'Mailinda', age: 32 });
        const isErinUpdated = erin.tryUpdate({ name: 'Erina', age: 21 });
        expect(isMaiUpdated).to.be.true;
        expect(isErinUpdated).to.be.true;
        expect(mai.name).to.be.equal('Mailinda');
        expect(mai.age).to.be.equal(32);
        expect(erin.name).to.be.equal('Erina');
        expect(erin.age).to.be.equal(21);
      });
    });
  });

  describe('greetAll() static method', function () {
    it('should call sayHello() on each people and returning an array of the stored strings from that call', function () {
      const people = [mai, erin];
      const greets = Person.greetAll(people);
      expect(greets.length).to.be.equal(2);
      expect(greets.at(0)).to.be.equal('Mai say hello');
      expect(greets.at(1)).to.be.equal('Erin say hello');
    });
  });
});
