const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product * item, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(x) {
  let result = 1;

	for (let i = 1; i <= x; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
