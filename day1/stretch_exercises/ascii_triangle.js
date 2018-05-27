// Assignment: Stretch Exercise #1b
// ASCII Triangle
// Write a method that takes a number N and then draw a triangle that has N
// number of letter O on each of its sides. For example given the number 5
// your will get something like:

//     O
//    O O
//   O O O
//  O O O O
// O O O O O


let userInput = parseInt(prompt('Give me a number: '))
let columns = 1

while(userInput > 0) {
  let indent = ''
  let points = ''

  for(i = 1; i <= userInput; i ++) {
    indent += ' '
  }

  for(i = 1; i <= columns; i ++) {
    points += '0 '
  }

  console.log(`${indent}${points}`)
  columns ++
  userInput --
}


// Using Repeat
let userInput = parseInt(prompt('Give me a number: '))
let columns = 1

while(userInput > 0) {
  indent = ' '.repeat(userInput - 1)
  points = '0 '.repeat(columns)

  console.log(`${indent}${points}`)
  columns ++
  userInput --
}
