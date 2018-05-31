// good evening everyone!
// day 1 - fundamentals of javascript / programming
// javascript environments

// 3 ways to run javascript
// 1. javascript console in the browser (chrome)
// 2. repl.it, jsbin, codepen (website)
// 3. node.js, terminal, bash, command prompt, CLI

// number
5 + 5;
Math.PI;
Math.round(3.141); // 3
2 ** 4;
10 % 3; // 1 (Remainder)
// text, String of characters
// "J"-"a"-"c"-"o"-"b"
"";
'';
``; // back ticks, found above the tab key

"Jacob's Class";
'"Hello," said Jacob.';
"\"Jacob\"s Class"; // escape a character
'\'Jacob\'s Class';
`Rose are red
Violets are blue






Hello!`;
// \n == new line

// boolean - 2 states
// true or false
// truthy programming languages
// 1 == true
// 0 == false

// this is true
if ("Jacob") {
  // will this code be run?
  // yes
}

// variable - store information in memory
let name = "Jacob";
let year = 2014;

if (year > 2018) {
  console.log("Our car is new!");
} else if (year > 2000) {
  console.log("Our car is newish!");
} else {
  console.log("Our car is old!");
}

// ternary
(year > 2018) ? console.log("New Car!") : console.log("Old Car!");

// iteration - computer does the hard work for us
// loops
// while loop

// brute force
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

let counter = 0;
console.log(counter);
console.log(counter+1);
console.log(counter+2);
console.log(counter+3);
console.log(counter+4); // ...

let counter = 0;

while (true) {
  console.log(counter);
  counter = counter + 1;

  // exit out of a loop
  if (counter == 10) {
    break;
  }
}

while (counter < 10) {
  console.log(counter);
  counter = counter + 1;
}

// for
// for (init; condition; inc/dec) {}
counter = counter + 1;
counter += 1;
counter++;

for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

for (let counter = 99; counter >= 0; counter--) {
  console.log(counter);
}

window.prompt();
window.confirm();
window.alert();

// number guessing game
window.alert("Welcome to our guessing game!");

let decision = window.confirm("Would you like to play?");
let secret = 9;
while (true) {
  if (decision) {
    let number = window.prompt("Guess a number between 1 and 10:");

    if (number == secret) {
      window.alert("Congratulation!");
      break;
    }
  }
}
// 

//




//
