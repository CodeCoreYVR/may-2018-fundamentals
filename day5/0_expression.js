// what is an expression?
// opposite of an expression: statement

5 + 5; // 10, expression, produces a value
if (true) {} // if statement, does not produce a value
while (true) {} // while statement, does not produce a value

function isEven( number ) {
  return number % 2 == 0;
} // expression/statement

// functional programming

let isEven = "hello";
let isEven = 42;
// function expression
// expressive function
let isEven = function() {};

// function declaration
// declaritive function
function isEven() {}

// anonymous functions
function() {
  console.log("hello!");
};

// DF - we put this function into the global namespace
// we can call this function anywhere
greet();

function greet() {
  console.log("hello!");
}



// let greet = funciton(){};

// let greet = function() { console.log("hello!") };

greet(); // doesn't work

// local function
let greet = function() {
  console.log("hello!")
};

greet(); // works









//
