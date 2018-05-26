// for
console.time("while loop");
let counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter++;
}
console.timeEnd("while loop");

// for (init; condition; inc/dec)
console.time("for loop");
for (let counter = 1; counter <= 10; counter++) {
  console.log(counter);
}
console.timeEnd("for loop");

// count down from 99 bottles of beer to 0
for (let counter = 99; counter >= 0; counter--) {
  if (counter != 1) {
    console.log(counter + " bottles of beer on the wall.");
  } else {
    console.log(counter + " bottle of beer on the wall.");
  }
}








//
