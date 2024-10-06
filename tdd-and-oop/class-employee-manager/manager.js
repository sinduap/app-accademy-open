const Employee = require('./employee');

class Manager extends Employee {
  employees = [];

  constructor(name, salary, title, manager) {
    super(name, salary, title, manager);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  _totalSubSalary() {
    return this.employees.reduce(
      (sum, e) =>
        e instanceof Manager
          ? sum + e.salary + e._totalSubSalary()
          : sum + e.salary,
      0
    );
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }
}

try {
  module.exports = Manager;
} catch {
  module.exports = null;
}
