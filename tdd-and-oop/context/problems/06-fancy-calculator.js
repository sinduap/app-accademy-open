// Your code here
const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
  total = 0;

  setTotal(num) {
    return (this.total = num);
  }

  squared() {
    return this.total ** 2;
  }

  modulo(num) {
    return this.total % num;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = FancyCalculator;
} catch {
  module.exports = null;
}
