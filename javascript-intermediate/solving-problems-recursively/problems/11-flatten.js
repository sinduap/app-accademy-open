/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
const flatten = arr => {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  const isArray = Array.isArray(first);
  if (isArray) return [...flatten(first), ...flatten(rest)];
  return [first, ...flatten(rest)];
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
