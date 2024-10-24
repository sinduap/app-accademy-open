// Your code here
class ValidationError extends Error {
  constructor(...args) {
    super(...args);
    const isThisConstructor = this.constructor.name === 'ValidationError';
    if (Error.captureStackTrace && isThisConstructor) {
      Error.captureStackTrace(this, ValidationError);
    }
    this.name = this.constructor.name;
    this.message = this.message || 'Invalid input';
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
