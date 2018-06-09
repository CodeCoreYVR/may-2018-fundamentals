// recursion
// function greet() {
//   greet();
// }

// sort things
// fractal patterns

function greet() {
  console.log("hello");
}

function runThree() {
  greet();
  greet();
  greet();
}

runThree();

function goodbye() {
  console.log("Ciao");
}

function runThree() {
  goodbye();
  goodbye();
  goodbye();
}

runThree();

// higher order functions - is a function that takes in a function as an argument
function runThree( fn ) {
  fn();
  fn();
  fn();
}

let greet = function() {
  console.log("Ciao!");
};

let goodbye = function() {
  console.log("Au Revior!");
};

runThree(greet);
runThree(goodbye);









//
