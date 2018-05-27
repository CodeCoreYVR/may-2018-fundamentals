// Assignment: Stretch Exercise #2a
// Palindrome
// Write a piece of code that checks whether a passed String is a palindrome
// or not. A palindrome is a string that reads that same both ways
// for instance: sugnangus

let word = prompt('Give me a word: ')
let wordReversed = word.split("").reverse().join("")

if (word === wordReversed) {
  console.log(`${word} is a Palindrome`)
} else {
  console.log(`${word} is not a Palindrome try again`)
}
