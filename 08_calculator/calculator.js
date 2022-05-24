const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let answer =  arr.reduce((total, current)=> {
    return total + current}, 0);
  return answer
};

const multiply = function(arr) {
  return arr.reduce((product, current)=>{return product * current},1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(n) {
  return n <= 1 ? 1 : n * factorial(n-1)
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
