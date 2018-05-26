// expressions
5 + 5;
`Hello, a dozen is ${ 6 + 6 }`;
// functions or methods
window.prompt("How old are you?");

// statements
if (true) {}
while () {}
for () {}

// expression returns a string
let age = window.prompt("How old are you?");
typeof age;
parseInt( age );


// let age = window.prompt("How old are you?");
// typeof age;
// age = parseInt( age );
// typeof age;

parseInt("39"); // 39
parseInt("abc"); // NaN
parseInt("39 year old"); // 39
parseInt("I am 39 years old"); // NaN


// string manipulation
//
//          01234
// "J"-"a"-"c"-"o"-"b"
let name = "Jacob";
name.substring(2,3);
// we start from zero
// [] = sub
name[2];

"Jacob";

"Yakob";
// non mutating values
// javascript failing silently
name[0] = "Y";
name[2] = "k";

name = "Yakob";

name.split('k');
