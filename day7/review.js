// day 1
"Jacob";
39;

// memory
// access memory
// variables
let name = "Jacob";
let age = 39;

"Hello " + name; // "Hello Jacob"

// make decisions
if (name == "Jacob") {
  console.log("Come on in!");
} else {
  console.log("Beat it stranger!");
}

// iteration - how machines can learn
// loops
// infinite loop
while (true) {
  console.log("Come on in!");
}

// first time through, we get a true condition: name == "Jacob"
// first time through, we get a false condition: name != "Jacob", name == "Jay"

while (name == "Jacob") {
  console.log("Come on in!");
  name = "Jay";
}

let counter = 10;
while (counter > 0) {
  console.log(counter);
  counter--;
}

let counter = 1000;
while (counter > 0) {
  console.log(counter);
  counter--;
}

for (let counter=1; counter<=10; counter++) {
  console.log(counter);
}

// day 2
// HTML = Hypertext Markup Language
<html></html>
<form>
  <input type="text">
  <input type="password">
  <input type="date">
  <input type="color">
  <input type="submit">
</form>

// day 3
// data structures
let me = ["Jacob", 39];
let numbers = [1,2,3,4,5];
const dog = {
  name: "Spot",
  age: 3
};
// functions
function morning() {}
// tie a series to instructions to name
morning();
morning();
morning();
morning();
morning();
//           parameter
function greet(name) {
  console.log("Hi " + name);
}
//    argument
greet("Jacob");
greet("Tam");
greet("Jason");

function add(number1, number2) {
  return number1 + number2;
} // return - turns this function into a specified value

add(5, 6); // 11
add(5, 6) == 11; // true

// day4
// CSS - Cascading Stylesheets
h1 {
  color: grey;
  background: yellow;
  border-radius: 5px;
  font-family: Arial;
  padding: 10px;
}

// day 5
// methods
const you = {
  // properties of me
  name: "Ciro",
  age: 39,
  // behaviour? methods
  // which object called this method?
  run() { console.log(this.name + " is running") },
  sleep() { console.log(this.name + " is sleeping") }
};

you.run();
shoppingList.push("Beer");

// higher order functions - a function that takes in a function as an argument?!
function greet() {
  console.log("Hi");
}

greet; // the function doesn't execute. the function itself is returned

function call( fn ) {
  fn();
}

call( greet ); // "Hi"


greet();
greet();
greet();

function runThree( fn ) {
  fn();
  fn();
  fn();
}

runThree( fn );

// timing function
setTimeout(greet, 3000);

function greet() {
  console.log("Hi");
  clearInterval(id); // this is how you stop an setInterval loop from running
}

const id = setInterval(greet, 1000);

// map
let numbers = [1,2,3,4,5];

function square( number ) {
  return number ** 2;
}

function map(arr, fn) {
  let results = [];

  for(let elm of arr) {
    results.push( fn(elm) );
  }

  return results;
}

map(numbers, square);
// [1,4,9,16,25]

// classes - classification, blueprint, describing what an object may be... idea
// constructing an instance of a class
class House {
  // the first method that is run when a house is constructed
  constructor( colour ) {
    console.log("A new " + colour +" house was constructed!");
  }
}

const townhome1 = new House("pink");
const townhome2 = new House("grey");
const townhome3 = new House("blue");
const townhome4 = new House("green");

// DOM - Document Object Model









//
