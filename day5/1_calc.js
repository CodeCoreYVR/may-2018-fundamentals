// calculator
let add = function(number1, number2) {
  return number1 + number2;
};

add(5, 6); // 11

let subtract = function(number1, number2) {
  return number1 - number2;
}

subtract(10, 2); // 8
subtract; // return a function
subtract(); // executes the function that is returned

// global vs local
greet();
function greet() {} // greet goes into the global namespace
greet();

// local scope
let greet = function(){}; // lexical scope - who can this function?
// only people who can see the variable

greet();








//
