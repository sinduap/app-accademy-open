const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(exceedNum = null, ...args) {
    super(...args);
    const isThisConstructor =
      this.constructor.name === 'MaximumLengthExceededError';
    if (Error.captureStackTrace && isThisConstructor) {
      Error.captureStackTrace(this, MaximumLengthExceededError);
    }
    this.name = this.constructor.name;
    this.message = 'Maximum length exceeded';
    this.message += exceedNum ? ` by ${exceedNum}` : '';
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
