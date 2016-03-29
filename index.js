'use strict';

const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];
const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function standardizeTime(time) {
  let result = time;
  ones.map((number, index) => result = result.replace(number, index));
  teens.map((number, index) => result = result.replace(number, index + 10));
  tens.map((number, index) => result = result.replace(number, (index + 1) * 10));

  // result = result
  //   .replace(/-/g, ' ');

  return result;
}

module.exports = standardizeTime;
