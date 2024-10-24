const Employee = require('./employee');

const employee = new Employee('John Wick', 'Dog Lover');

setTimeout(employee.sayName, 2000); // this = setTimeout
setTimeout(employee.sayName.bind(employee), 2000);

setTimeout(employee.sayOccupation, 3000); // this = setTimeout
setTimeout(employee.sayOccupation.bind(employee), 3000);
