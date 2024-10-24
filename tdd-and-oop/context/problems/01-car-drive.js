// Your code here
class Car {
  speed = 0;

  drive(num) {
    return (this.speed = num);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Car;
} catch {
  module.exports = null;
}
