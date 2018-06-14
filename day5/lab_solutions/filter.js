// Assignment: Filtering Arrays
// Part 1
// Write a function that takes a number and returns whether the number is positive or not.

// [Stretch]: return false if the parameter is not a number.

// Part 2
// Write a function called filter that takes two parameters, an array (a) and
// another function (fn). This function should return a new array containing
// all the items in a for which fn returns true. For example, you should be
// able to call it like this:

// filter([1,3,4], function(num){
//   return num > 2;
// });
// Test filter using the isPositive function you wrote above and the following array [-5, 0, 1, 'car'].

// [Stretch]: Afterwards, try to achieve the same results using the built in ES6 filter function or the lodash filter function.

const example = [-5, 0, 1, 2, 4, 5, 7, 8, 'car']

const isEven = function(num) {
  return num % 2 === 0
}

function isPositive(value) {
  return Number.isInteger(value) && value > 0
}


const filter = function(arr, fn) {
  let result = []

  for(let element of arr) {
    if (fn(element)) {
      result.push(element)
    }
  }

  return result
}

filter(example, isEven)
