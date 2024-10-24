const greater = (val1, val2) => (val1 > val2 ? val1 : val2);
const smaller = (val1, val2) => (val1 < val2 ? val1 : val2);

function multiplyBiggerNumByTwo(num1, num2) {
  return greater(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return greater(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${greater(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${smaller(weight1, weight2)} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
