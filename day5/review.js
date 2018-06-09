// html / css
// Hyper Text Markup Language - Describe Meaning, Skeleton
// Cascading Style Sheets - Colour, Layout, Position, Clothing
<h1 style="color: pink">Jacob</h1>

// js: even, odd exercise, brains!
2; // even
3; // odd
7; // odd
8; // even
9; // odd
10; // even

// the definition of a number being even: divide by two, even groups, whole numbers, remainder of zero

// algorithm for even number
// i feed in the number 2

// % = modulo
10 % 2; // remainder of zero
10 % 3; // remainder of 1

// i get back true -> meaning it is even
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// ternary
function isEven(number) {
 (number % 2 == 0) ? return true : return false;
}

function isEven(number) {
  return number % 2 == 0;
}

// isOdd?
function isOdd(number) {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  return number % 2 == 1;
}

// is prime number







//
