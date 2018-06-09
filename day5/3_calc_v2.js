let add = function(number1, number2) { return number1 + number2 };
let subtract = function(number1, number2) { return number1 - number2 };
let multiply = function(number1, number2) { return number1 * number2 };
let divide = function(number1, number2) { return number1 / number2 };

function calc(number1, operation, number2) {
  return operation(number1, number2);
}

calc(5, add, 5);
calc(10, subtract, 2);
