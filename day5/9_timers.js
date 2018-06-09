// built-in higher order function

// timing
// setTimeout(fn, delay);

let greet = function() {
  console.log("hi!");
};

// delay is in ms, 1000ms == 1sec
setTimeout(greet, 1000);

// but it repeats itself
setInterval(greet, 1000);

setInterval(function(){
  console.log("hi");

}, 1000);

let number1 = 5;
let number2 = 6;

add(number1, number2);
add(5, 6);


// setInterval(greet, 1000);

let id = setInterval(function() {
  console.log("hi!");
  clearInterval(id);
}, 1000);

// event loop

let counter = 0;
let id = setInterval(function() {
  console.log("hi!");
  counter++;

  if (counter > 10) {
    clearInterval(id);
  }
}, 1000);




//
