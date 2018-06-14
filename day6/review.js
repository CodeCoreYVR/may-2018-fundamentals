// good evening!!!
//  day1 - js fundamental
// js history - brendan eich, netscape, oracle @JavaScript
// 10 days
// ECMAScript 6.0
let ciro = "penguin";
let age = 39;
let up = true;
let shoppingList = ["beer", "chips", "dip"];
const me = {
  name: "Jacob",
  age: 39
};

// functions
// Expressive function
// function expression
// a variable and an anonymous function
let add = function() {};
function() {} // throw an error

                       // parameters
let subtract = function(number1, number2) {
  return number1 - number2;
};

// return - turns a function into a meaningful value
// undefined

        // arg
subtract(5, 6); // -1
//

// higher order function - function that calls on another function
// a function that takes in a function as an argument or return a function

// function submit() {
//   return function() {};
// }

function greet() {
  console.log("Hi!");
}

function threeTimes( fn ) {
  fn(); // (); to execute the function
  fn();
  fn();
}

// reference to the function
threeTimes( greet );

// map
let numbers = [1,2,3,4,5];
let results = [];

// iteration
for (let number of numbers) {
  results.push(number * number);
  // number ** 2;
}
// square mapping
// [1,4,9,16,25];

let numbers = [1,2,3,4,5];

function square( number ) {
  return number * number;
}

// algorithm
function map(arr, fn) {
  let results = [];
  for (let elm of arr) {
    results.push( fn(elm) );
  }

  return results;
}

map(numbers, square); // [1,4,9,16,25]


// filter
let numbers = [1,2,3,4,5];

function isEven(number) {
  return number % 2 === 0;
}
function isOdd(number) {
  return number % 2 != 0;
  // return number % 2 == 1;
}

function filter(arr, fn) {
  let results = [];

  for (let elm of arr) {
    if (fn(elm) == true) {
      results.push(elm);
    }
  }

  return results;
}

filter(numbers, isEven);
//

// timing functions
// setTimeout(fn, delay);
function greet() {
  console.log("Hi!");
}
setTimeout(greet, 5000);
// setInterval(fn, delay);

let id = setInterval(greet, 1000);

function greet() {
  console.log("Hi!");
  clearInterval(id);
}

// methods
// objects
const mario = {
  // properties
  age: 40,
  profession: "plumber",
  // behaviours, methods
  run() { console.log("Mario is running") },
  jump() { console.log("Mario is jumping") }
}

shoppingList.sort();
mario.run();
mario.jump();

// DOM
