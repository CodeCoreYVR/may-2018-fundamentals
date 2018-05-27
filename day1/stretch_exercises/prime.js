// Assignment: Stretch Exercise #2b
// Prime Number
// Ask the user for a number x and then print the first x prime numbers.
// Prime numbers are divisible only by 1 and themselves.


let number = parseInt(prompt('Give me a number: '))
let result = true

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    result = false;
  }
}

console.log(result)
