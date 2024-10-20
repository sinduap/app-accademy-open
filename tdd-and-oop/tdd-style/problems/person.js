class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} say hello`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object' && obj !== null) {
      throw new TypeError('Invalid input, must be an object');
    }
    if (!obj.name || !obj.age) {
      throw new TypeError('Input must have name and age property');
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(people) {
    return people.map(person => person.sayHello());
  }
}

module.exports = Person;
