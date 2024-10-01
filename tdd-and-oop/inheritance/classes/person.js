class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`;
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error('introducePeople only takes an array as an argument.');
    }

    this.checkInstanceofThis(people);

    people.forEach(person => person.introduce());
  }

  static validate(objects, errMsg) {
    if (!objects.every(obj => obj instanceof this))
      throw new Error(
        errMsg || `All items in array must be ${this.name} class instances.`
      );
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
