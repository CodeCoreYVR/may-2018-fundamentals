// robotics
// server side programming

// front-end programming
// javascript in the context of the browser
// web based development

// create a popup
console.log();
console.time();

// microsoft windows
// an application
// window = chrome browser
window.alert(); // just a popup, no user interaction
window.prompt(); // waits for a response, allows you to type in a text field
window.confirm(); // boolean response

// remember???
// let age = 39;
// create an age variable that will store a number. window is an object, our browser. it has a function or method called prompt. that method returns a value that was typed into the text field in the form of a string.
let age = window.prompt("How old are you?");
console.log("You are " + age + " years old!");

// introduce our bot with an alert
alert("Hello, my name is Cleverbot.  I was born on May 26, 2018.  My dad is Jacob Tran.");
// ask a series of personal questions and store the results in variables
// what type of variable is name: "string"
let name = prompt("What is your name?");
// what type of variable is age: "string"
let age = prompt("What is your age?");
// "39" == 39
let height = prompt("What is your height in inches?");
let movie = prompt("What is your favourite movie?");
// ask it they want to stop the conversation
// what type of variable is quit?  boolean
let quit = confirm("Do you want to stop talking?");
// if they do, politely say goodbye
// if (quit == true) {
// if (true) {}
if (quit) {
  // alert("Goodbye " + name); // string concatenation
  alert(`Goodbye ${name}`); // string interpolation
} else {
  confirm("Do you want to go for coffee?");
}
// and if they don't ask one more question









//



//
