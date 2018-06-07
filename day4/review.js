// data
5 + 5;  // 10
10 * 2; // 20

// persistance of data
// remember
// variable
// memory,
let result = 5 + 5;
console.log(result);
result = result * 2;
// variable means change

let result = 10 * 2;

// var - duplicate is legal
var result = 5 + 5;
var result = 10 * 2;

// constant
const PI = 3.14159;
const taxes = true;

// functions
// morning routines
// 5 days a week
// monday
console.log("wake up");
console.log("brush teeth");
// console.log("eat breakfast");
console.log("commute to work");
console.log("code");
// tuesday
console.log("wake up");
console.log("brush teeth");
// console.log("eat breakfast");
console.log("commute to work");
console.log("code");
// wednesday
console.log("wake up");
console.log("brush teeth");
// console.log("eat breakfast");
console.log("commute to work");
console.log("code");
// thursday
console.log("wake up");
console.log("brush teeth");
console.log("eat breakfast");
// console.log("commute to work");
console.log("code");
// friday
console.log("wake up");
console.log("brush teeth");
// console.log("eat breakfast");
console.log("commute to work");
console.log("code");

// function keyword
// function name
// round brackets
// curly brackets
function morning() {
  console.log("wake up");
  console.log("brush teeth");
  // console.log("eat breakfast");
  console.log("commute to work");
  console.log("code");
}

morning();
morning();
morning();
morning();
morning();

// () {}
// () parameters
// {} code block
function greet() {
  console.log("Hi!");
}

greet();

function greet(name) {
  console.log("Hi " + name);
}

console.log(name);
// "Max" is an argument
greet("Max"); // "Hi Max"


function add(number1, number2) {
  console.log(number1 + number2);
}

function add(number1, number2) {
  return number1 + number2;
}

add(5,6); // turns the function into a meaninguful value

// objects - the basis for anything meaningful in programming, OOP - object oriented programming
// const me = new Object(); // object constructor

const me = {
  // property: value
  name: "Jacob",
  age: 39,
  profession: "Teacher"
};

// ask questions
// what is your name?
me.name; // dot operator
me["name"]; // array syntax
let searchProperty = 'age';
me[ searchProperty ];
// me[ 'age' ];

const you = {
  // property: value
  name: "Cale",
  age: 24,
  profession: "Student"
};

// iteration, looping, repeating
// iterate over an object
// for..in -> loop through objects
// for..of -> loop through arrays
for (let property in you) {
  console.log(property);
  console.log(you[property]);
  // you.property
  // you.name;
  // you.age...
}

Object.keys(you);


// Assignment: [lab] Frequency of letters Edit Next Module
// Write a function

// that prompts the user

// to enter a sentence and
// then return an object

// whose keys are the letter

//and values are the number of occurrences of that letter, for example, if the user enters "hello world", it will return:

// {h: 1, e: 1, l: 3, o: 2, w: 1, d: 1}

//  Write a function
function frequencyOfLetters() {
  const result = {
    // property, field, key
    h:
  };

  let sentence = window.prompt("Please enter a sentence: ");
  let characters = sentence.split("");
  for (let character of characters) {
    console.log(character);
    // me.name
    // me["name"]
    // let searchProperty = "name";
    // me[searchProperty]
    // result[character] = 0; // setter, sets this property into the object

    // // if the property doesn't exist
    if (result[character] == undefined) {
      // create it and set it's initial value to 1
      result[character] = 1;
    } else {
      // else, if we have been here before, and the property already exists,
      // takes it's current value and one and store it back into itself.
      result[character]++;
    }
  }
  return result;
}

frequencyOfLetters();

const me = {
  name: "Jacob",
  age: 39
};

me.hobby; // dot operator, get operation
me.hobby = "rock climbing";

me["pet"]; // no...
me["pet"] = "dog"; // set operation, getter/setter, attribute accessor






///
