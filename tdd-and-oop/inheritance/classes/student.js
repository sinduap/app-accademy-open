const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName, null);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(...students) {
    this.validate(students);
    const [student1, student2] = students;
    let higherName;
    if (student1.GPA > student2.GPA) {
      higherName = student1.firstName + ' ' + student1.lastName;
    } else if (student1.GPA < student2.GPA) {
      higherName = student2.firstName + ' ' + student2.lastName;
    }

    return higherName
      ? `${higherName} has the higher GPA.`
      : 'Both students have the same GPA.';
  }
}

console.log(Student.compareGPA([{}, {}]));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
