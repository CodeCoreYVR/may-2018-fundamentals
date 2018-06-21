// Hello class! Welcome to HTML CSS Day 4
const name = 'Forrest'
let age = 26

// Control Flow
if (age > 18) {
  console.log('Adult!')
}

// Data Stuctures: Arrays & Object
let numbers = [1, 45, 7, 8, 39]
numbers[0]
numbers[3]

// This will give you the last element of the array
numbers[numbers.length - 1]

let nums = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd'
}

nums[2] // 'c'
nums[3] // 'd'

const ming = {
  name: 'Ming',
  age: 26
}

ming.name
ming.age

ming['name']
ming['age']

ming.job = 'Unemployed'


// Loops

// While Loop
let counter = 0

while(counter < 10) {
  console.log(counter)
  counter ++
}


// For Loop
let greetings = ['hello', 'hi', 'hey', 'yo', 'hai']

for (let i = 0; i < greetings.length; i++) {
  console.log(greetings[i])
}

for (let word of greetings) {
  console.log(word)
}

for(let property in ming) {
  console.log('This is the key', property)
  console.log('This is the value', ming[property])
}

// Functions
function morningRoutine() {
  console.log('wake up')
  console.log('brief exercise')
  console.log('shower')
  console.log('go to work')

  return 'all done'
}

morningRoutine()

// Higher Order Function
function add(num1, num2) {
  return num1 + num2
}

function call(number1, number2, callback) {
  return callback(number1, number2)
}

call(5, 2, add)


// jQuery
$('h1')
$('#heading')
$('.greeting')
