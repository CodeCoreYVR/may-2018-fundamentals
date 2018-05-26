// loops

// while this condition is true
while (true) {
  // execute this code
  console.log("hello!");
}

// infinite loop

// essentially an if statement, only says hello once
while (true) {
  // execute this code
  console.log("hello!");
  break; // exit out of the loop
}

// say hello 3 times
// bring in the variable
let counter = 3;

while(true) {
  console.log("hello!");
  // change the variable
  counter = counter - 1;

  if (counter == 0) {
    break;
  }
}

// i want to count from 1 to 10.
// brute force method
let counter = 1;
console.log(counter);
console.log(counter+1);
console.log(counter+2);
console.log(counter+3);
console.log(counter+4); // ....
console.log(counter+5); // ....
console.log(counter+6); // ....
console.log(counter+7); // ....
console.log(counter+8); // ....
console.log(counter+9); // ....

// loops, we let the computer do the hard work
// machine learning
let counter = 1;

while (true) {
  console.log(counter);
  counter = counter + 1;
}




let counter = 1;

while (true) {
  console.log(counter);
  // counter = counter + 1;
  // operands
  // counter += 2; // increase by any number we want
  counter++; // will only increase by one

  if (counter > 10) {
    break;
  }
}


// let count from 1 to 10 a different way
let counter = 1;

while (counter < 11) {
  console.log(counter);
  counter++;
}

let counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter++;
}

// i want to countdown to new years: 10 to 1, then shout "Happy New Year!"

// step 1:
let counter = 10;

// step 2:
while (counter > 0) {
  // step 4:
  console.log(counter);
  // step 3:
  // counter = counter - 1;
  // operands
  // counter -= 1;
  counter--;
}

console.log("Happy New Year!");

// i want to skip every 2nd stair and take long strides to get to the top of the staircase
// step 1:
let step = 0;

while (step < 20) {
  console.log(step);
  step += 2;
}

let stride = 2;
let step = 0;
let length = 100;

// algorithm
// pseudo code, no magic numbers
while (step < length) {
  console.log(step);
  step += stride;
}












//
