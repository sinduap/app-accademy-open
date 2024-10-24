// Your code here
const chai = require('chai');
const {
  Triangle,
  Scalene,
  Isosceles,
  Right,
  Equilateral,
} = require('../problems/triangle');
const expect = chai.expect;

describe('Triangle class', function () {
  let validTriangle, invalidTriangle;

  beforeEach(() => {
    validTriangle = new Triangle(2, 3, 4);
    invalidTriangle = new Triangle(3, 4, 20);
  });

  describe('constructor', function () {
    it('should have side1, side2, and side3 properties', function () {
      const expectedKeys = ['side1', 'side2', 'side3'];
      expect(validTriangle).to.have.all.keys(expectedKeys);
      expect(invalidTriangle).to.have.all.keys(expectedKeys);
      expect(validTriangle.side1).to.be.equal(2);
      expect(validTriangle.side2).to.be.equal(3);
      expect(validTriangle.side3).to.be.equal(4);
      expect(invalidTriangle.side1).to.be.equal(3);
      expect(invalidTriangle.side2).to.be.equal(4);
      expect(invalidTriangle.side3).to.be.equal(20);
    });
  });

  describe('getPerimeter() instance method', function () {
    it('should return the perimeter of the Triangle instance, by summing the three sides', function () {
      expect(validTriangle.getPerimeter()).to.be.equal(2 + 3 + 4);
      expect(invalidTriangle.getPerimeter()).to.be.equal(3 + 4 + 20);
    });
  });

  describe('hasValidSideLengths() instance method', function () {
    it('should returns true if it is a valid triangle, and false if it is invalid', function () {
      expect(validTriangle.hasValidSideLengths()).to.be.true;
      expect(invalidTriangle.hasValidSideLengths()).to.be.false;
    });
  });

  describe('validate() instance method', function () {
    it('should adds an isValid property to the triangle instance', function () {
      validTriangle.validate();
      invalidTriangle.validate();
      expect(validTriangle.isValid).to.be.exist;
      expect(invalidTriangle.isValid).to.be.exist;
      expect(validTriangle.isValid).to.be.true;
      expect(invalidTriangle.isValid).to.be.false;
    });
  });

  describe('getValidTriangles() static method', function () {
    it('should returns all of the instances that are valid triangles', function () {
      const otherValidTriangle = new Triangle(5, 6, 9);
      const otherInvalidTriangle = new Triangle(1, 2, 4);
      const triangles = [
        validTriangle,
        invalidTriangle,
        otherValidTriangle,
        otherInvalidTriangle,
      ];
      expect(Triangle.getValidTriangles(triangles)).to.have.length(2);
      expect(Triangle.getValidTriangles(triangles)).to.deep.equal([
        validTriangle,
        otherValidTriangle,
      ]);
    });
  });
});

describe('Scalene class', function () {
  let validScalene, invalidScalene;

  beforeEach(() => {
    validScalene = new Scalene(2, 3, 4);
    invalidScalene = new Scalene(3, 4, 4);
  });

  describe('Scalene inherit the Triangle', function () {
    it('should have side1, side2, side3, and isValidTriangle properties', function () {
      const expectedKeys = ['side1', 'side2', 'side3', 'isValidTriangle'];
      expect(validScalene).to.have.all.keys(expectedKeys);
      expect(invalidScalene).to.have.all.keys(expectedKeys);
      expect(validScalene.isValidTriangle).to.be.true;
      expect(invalidScalene.isValidTriangle).to.be.true;
    });
  });

  describe('isScalene() instance method', function () {
    it('should returns true if it is a valid scalene triangle, and false otherwise', function () {
      expect(validScalene.isScalene()).to.be.true;
      expect(invalidScalene.isScalene()).to.be.false;
    });
  });

  describe('validate() instance method', function () {
    it('should adds an isValidScalene property to the scalene triangle instance', function () {
      validScalene.validate();
      invalidScalene.validate();
      expect(validScalene.isValidScalene).to.be.exist;
      expect(invalidScalene.isValidScalene).to.be.exist;
      expect(validScalene.isValidScalene).to.be.true;
      expect(invalidScalene.isValidScalene).to.be.false;
    });
  });
});

describe('Isosceles class', function () {
  let validIsosceles, invalidIsosceles;

  beforeEach(() => {
    validIsosceles = new Isosceles(3, 4, 4);
    invalidIsosceles = new Isosceles(3, 4, 5);
  });

  describe('Isosceles inherit the Triangle', function () {
    it('should have side1, side2, side3, and isValidTriangle properties', function () {
      const expectedKeys = ['side1', 'side2', 'side3', 'isValidTriangle'];
      expect(validIsosceles).to.have.all.keys(expectedKeys);
      expect(invalidIsosceles).to.have.all.keys(expectedKeys);
      expect(validIsosceles.isValidTriangle).to.be.true;
      expect(invalidIsosceles.isValidTriangle).to.be.true;
    });
  });

  describe('isIsosceles() instance method', function () {
    it('should returns true if it is a valid isosceles triangle, and false otherwise', function () {
      expect(validIsosceles.isIsosceles()).to.be.true;
      expect(invalidIsosceles.isIsosceles()).to.be.false;
    });
  });

  describe('validate() instance method', function () {
    it('should adds an isValidIsosceles property to the isosceles triangle instance', function () {
      validIsosceles.validate();
      invalidIsosceles.validate();
      expect(validIsosceles.isValidIsosceles).to.be.exist;
      expect(invalidIsosceles.isValidIsosceles).to.be.exist;
      expect(validIsosceles.isValidIsosceles).to.be.true;
      expect(invalidIsosceles.isValidIsosceles).to.be.false;
    });
  });
});

describe('Right class', function () {
  let validRight, invalidRight;

  beforeEach(() => {
    validRight = new Right(3, 4, 5);
    invalidRight = new Right(2, 3, 4);
  });

  describe('Right inherit the Triangle', function () {
    it('should have side1, side2, side3, and isValidTriangle properties', function () {
      const expectedKeys = ['side1', 'side2', 'side3', 'isValidTriangle'];
      expect(validRight).to.have.all.keys(expectedKeys);
      expect(invalidRight).to.have.all.keys(expectedKeys);
      expect(validRight.isValidTriangle).to.be.true;
      expect(invalidRight.isValidTriangle).to.be.true;
    });
  });

  describe('isRight() instance method', function () {
    it('should returns true if it is a valid right triangle, and false otherwise', function () {
      expect(validRight.isRight()).to.be.true;
      expect(invalidRight.isRight()).to.be.false;
    });
  });

  describe('validate() instance method', function () {
    it('should adds an isValidRight property to the right triangle instance', function () {
      validRight.validate();
      invalidRight.validate();
      expect(validRight.isValidRight).to.be.exist;
      expect(invalidRight.isValidRight).to.be.exist;
      expect(validRight.isValidRight).to.be.true;
      expect(invalidRight.isValidRight).to.be.false;
    });
  });
});

describe('Equilateral class', function () {
  let validEquilateral, invalidEquilateral;

  beforeEach(() => {
    validEquilateral = new Equilateral(5, 5, 5);
    invalidEquilateral = new Equilateral(2, 3, 4);
  });

  describe('Equilateral inherit the Triangle', function () {
    it('should have side1, side2, side3, and isValidTriangle properties', function () {
      const expectedKeys = ['side1', 'side2', 'side3', 'isValidTriangle'];
      expect(validEquilateral).to.have.all.keys(expectedKeys);
      expect(invalidEquilateral).to.have.all.keys(expectedKeys);
      expect(validEquilateral.isValidTriangle).to.be.true;
      expect(invalidEquilateral.isValidTriangle).to.be.true;
    });
  });

  describe('isEquilateral() instance method', function () {
    it('should returns true if it is a valid equilateral triangle, and false otherwise', function () {
      expect(validEquilateral.isEquilateral()).to.be.true;
      expect(invalidEquilateral.isEquilateral()).to.be.false;
    });
  });

  describe('validate() instance method', function () {
    it('should adds an isValidEquilateral property to the equilateral triangle instance', function () {
      validEquilateral.validate();
      invalidEquilateral.validate();
      expect(validEquilateral.isValidEquilateral).to.be.exist;
      expect(invalidEquilateral.isValidEquilateral).to.be.exist;
      expect(validEquilateral.isValidEquilateral).to.be.true;
      expect(invalidEquilateral.isValidEquilateral).to.be.false;
    });
  });
});
