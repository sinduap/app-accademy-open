const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName, null);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I have been teaching ${this.subject} for ${this.yearsOfExperience} years.`;
  }

  static combinedYearsOfExperience(teachers) {
    this.validate(teachers);
    return teachers.reduce((sum, t) => t.yearsOfExperience + sum, 0);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
