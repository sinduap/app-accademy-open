// Your code here
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLengths() {
    const sides = [this.side1, this.side2, this.side3];
    for (let i = 0; i < sides.length; i++) {
      const curr = sides.at(i);
      const rest = sides.slice(0, i).concat(sides.slice(i + 1));
      const sumRest = rest.reduce((a, b) => a + b);
      if (sumRest < curr) return false;
    }
    return true;
  }

  validate() {
    this.isValid = this.hasValidSideLengths();
  }

  static getValidTriangles(triangles) {
    triangles.forEach(t => t.validate.call(t));
    return triangles.filter(t => t.isValid);
  }
}

class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isScalene() {
    return new Set([this.side1, this.side2, this.side3]).size === 3;
  }

  validate() {
    this.isValidScalene = this.isValidTriangle && this.isScalene();
  }
}

class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isIsosceles() {
    return new Set([this.side1, this.side2, this.side3]).size === 2;
  }

  validate() {
    this.isValidIsosceles = this.isValidTriangle && this.isIsosceles();
  }
}

class Right extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isRight() {
    const [a, b, c] = [this.side1, this.side2, this.side3].sort();
    return a ** 2 + b ** 2 === c ** 2;
  }

  validate() {
    this.isValidRight = this.isValidTriangle && this.isRight();
  }
}

class Equilateral extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isEquilateral() {
    return new Set([this.side1, this.side2, this.side3]).size === 1;
  }

  validate() {
    this.isValidEquilateral = this.isValidTriangle && this.isEquilateral();
  }
}

module.exports = { Triangle, Scalene, Isosceles, Right, Equilateral };
