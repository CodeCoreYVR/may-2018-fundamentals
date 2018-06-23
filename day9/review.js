// good morning!

// day 1
// intro to JavaScript TM
// Brendan Eich, in 10 day at Netscape Navigation
// ECMAScript 6.0
// Java is owned by Oracle
// JavaScript is owned by Oracle

let name = "Jacob"

if () {
  console.log();
}
else {

}

// day 2
// Sir Tim Berners-Lee
// HTML
// LHPC, FermiLabs (USA)
// CERN (Switzerland)
<html>
  <head>
    <meta>
  </head>
  <body>
  </body>
</html>

// day 3
// data structures
// list
// array
let name = "Jacob";

let names = ["Jacob", "Thang", "Tran"];
names[0];
names[1];
names[2];

let students = [
  ["Jacob", "Thang", "Tran"], // 0
  ["Tam", "Paul", "Kbeili"],  // 1
  ["Jason", "Beast", "Tam"]   // 2
];

students[2][2]; // "Tam", Jason's last name
students[2[2]];
// which row, col
              //  0      1        2
students[1]; // ["Tam", "Paul", "Kbeili"]
students[1][2];

// everything starting with an object
// an object in real world is something perceive with our senses
const me = {
  name: "Jacob",
  age: 39
}; // will lock this datatype to an object

let shoppingList = ["Low Fat Yogurt", "Sugar Free Granola", "Beer"];
shoppingList[0];

const shoppingList = {
  0: "Yogurt",
  1: "Granola",
  2: "Beer"
};

shoppingList[0];

const shoppingList = {
  0: "Yogurt",
  1: "Granola",
  2: "Beer", // numeric property, must use []
	last: "Chips", // symbol property, you can do both
	"sale item": "Dip" // string property, must use []
};

// shoppingList[0];
// shoppingList.0;
// shoppingList.2;
// shoppingList.sale item;
shoppingList["sale item"];

() // parentheses
[] // brackets
{} // braces

// day 4
// CSS - Web Design
h1 - selector
declaration {}
property, value pair, style

h1 {
  color: white;
  font-family: Arial;
  display: block; // take up the entire horizontal space
}

// inline css
// external css
// link into our page

// day 5
// functions
// higher-order function
// objects
// class
function runThree(fn) {
  fn();
  fn();
  fn();
}
// asynchronous programming

// day 6
// adv. css
// Position
mario {
  position: absolute;
  top: 300px;
  left: 200px;
  // bottom:
  // right:
}

nav {
  position: fixed;
}

// grid system, grid garden
// flexbox frogger
// flexbox defence

// day 7
// John Resig
// jQuery
// write less do more
//
// $ = jquery
// $ = css selector
$('a').click();
$('h1').html("Jacob was here!");

// day 8
// flex flexbox
// pyramids

// day 9
// 1. append & prepend (creating content on the fly)
// 2. connect to a database!!!
// 3. google firebase

//
