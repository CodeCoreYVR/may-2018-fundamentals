// good morning everyone!

// what are three ways to define variables in javascript?
// 1. let - latest version of variable definition
let name = "Jacob";
let name = "Prince";
// will error

// 2. var
var name = "Jacob";
var name = "Prince";
// will not error

// 3. const
const PI = 3.14159;

// what are 3 different ways to iterate in javascript?
// iterate == repeat == loop
// 1. for
// 2. do..while
// 3. while

// profiling or benchmarking
// console.time()
console.time("while");
let counter = 0;

while (counter < 10) {
  // instructions
  console.log(counter);
  // iterator
  counter++;
}
console.timeEnd("while");

console.time("for");
for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}
console.timeEnd("for");

// javascript - native to the web browser
// what are three ways we can interact with our web browser through javascript?
// 1. prompt
// 2. alert
// 3. confirm

// number guessing game
window.alert("Welcome to our guessing game!");

let decision = window.confirm("Would you like to play?");
// 0 - 10
// round, ceil, floor
let secret = Math.ceil( Math.random() * 10);
// let secret = 1 + Math.round( Math.random() * 9);

while (true) {
  if (decision) {
    let number = window.prompt("Guess a number between 1 and 10:");

    if (number == secret) {
      window.alert("Congratulation!");
      break;
    } else if (number < secret) {
      window.alert("Your number is too low");
    } else if (number > secret) {
      window.alert("Your number is too high");
    }
  }
}










//
