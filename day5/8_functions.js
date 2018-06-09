// functions
// higher order is a function that takes in a function as an argument
function callThree( fn ) {
  fn();
  fn();
  fn();
}

function addOne( number ) {
  return number + 1;
}
addOne(5); // 6
addOne(7); // 8

let numbers = [1,2,3,4,5];
let results = [];
// [2,3,4,5,6];
// 1. how do iterate over an array
// for ( in ) // objects
for (let number of numbers) {
  results.push( addOne(number) );
}
// arrays
console.log(results);

// data mapping!
// the world applied to grid
// postal code mapping

// addOne mapping

// square mapping
let numbers = [1,2,3,4,5];
let results = [];

function square(number) {
  return number * number;
  // return number ** 2;
}
for (let number of numbers) {
  results.push( square(number) );
}

console.log( results );

// let squares = [1,4,9,16,25];
// array of numbers
let numbers = [1,2,3,4,5];

// possible operation to apply to a number
function square(number) {
  return number * number;
}

function addOne( number ) {
  return number + 1;
}

// this map function is a higher order function
function map(arr, fn) {
  let results = [];
  // we iterate over arrays using for..of statement
  for (let elm of arr) {
    results.push ( fn(elm) );
  }
  return results;
}

map(numbers,addOne);







///
