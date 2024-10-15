function allTheArgs(func, ...args) {
  // Your code here
  return (...otherArgs) => func.call(this, ...args, ...otherArgs);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
