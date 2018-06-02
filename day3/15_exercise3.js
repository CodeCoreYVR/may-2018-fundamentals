// hashes - dictionaries, postal codes, elections, cryptography, crypto currencies

pulp - a wet, soapy mass of thin wood chips.
fiction - a made up story

word: definition
key: value

// objects are the perfect vehichle for hashes
const me = {
  name: "Jacob",
  age: 39
};

// hash
const dictionary = {
  pulp: "a wet, soapy mass of thin wood chips.",
  fiction: "a made up story."
};

// elections
let votes = ["Trump", "Clinton", "Trump"];
//
// Trump | Clinton
// ---------------
//    2  |    1
//
//    Therefore, Trump is president


let votes = ["R", "D", "R"];

// who won programmatically
let votes = "RDRRRRRDDDDDDRRDRDRRRDRDRRDRRRRDRDDDDDRDRRR";
votes.length; // how many votes were there
// split, string function/method
let aVotes = votes.split(""); // turns a string into an array
// ["R","D","R"...]
// iterate over an array
let rCounter = 0;
let dCounter = 0;

for (let vote of aVotes) {
  console.log(vote);
  if (vote == "R") {
    rCounter++;
  } else if (vote == "D") {
    dCounter++;
  }
}

console.log("The total Republic votes are: " + rCounter);
console.log("The total Democratic votes are: " + dCounter);


// why const in objects
const me = {
  name: "Jacob",
  age: 39,
  profession: "teacher"
};
// i want the object data type to stay locked.  this does not mean that we cannot change it's individual properties or values, it just means that we can't change it to a string, int, boolean or array.

// i don't want you to know my age
// i forgot to let you know that i enjoy rock climbing
delete(me.age);
me.hobby1 = "rock climbing"; // .operator: getter and setter, attribute accessor
me.hobby2 = "bjj";
me.hobby3 = "muay thai";



//



//
