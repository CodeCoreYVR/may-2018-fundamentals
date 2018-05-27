// Assignment: Stretch Exercise #1c
// Permutations
// Ask the user for for three inputs and then print out all the possible
// permutations for the user inputs. For instance if the users inputs
// a, b and c you should print out:


let letterOne = prompt('Give me a letter: ')
let letterTwo = prompt('Give me a second letter: ')
let letterThree = prompt('Give me a third letter: ')

let letters = letterOne + letterTwo + letterThree

for(x of letters) {
  for(y of letters) {
    for(z of letters) {
      console.log(`${x}${y}${z}`)
    }
  }
}
