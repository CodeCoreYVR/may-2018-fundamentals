// Assignment: Stretch Exercise #1a
// Print letters
// Write a code that prints letters in increasing number as follows:
// a
// bb
// ccc
// dddd
// eeeee
// ffffff


// Simple Solution
let counter = 1

for(let char = 97; char <= 122; char++) {
  let letter = String.fromCharCode(char)
  let result = ''

  for(let i = 1; i <= counter; i ++) {
    result += letter
  }

  counter ++

  console.log(result)
}

// Better solution looping through a string.
let letters = 'abcdefghijklmnopqrstuvwxyz'

for (let position = 0; position <= (letters.length - 1); position ++){
  letter = letters[position]
  result = ''

  for(let i = 1; i <= (position + 1); i ++) {
    result += letter
  }

  console.log(result)
}

// Cheater Solution using repeat
let counter = 1

for(let char = 97; char <= 122; char ++) {
  console.log(String.fromCharCode(char).repeat(counter))
  counter ++
}

// Alternate Cheater Solution using repeat
let letters = 'abcdefghijklmnopqrstuvwxyz'

for (let index = 0; index <= (letters.length - 1); index ++) {
  let letter = letters[index]
  let result = letter.repeat(index + 1)

  console.log(result)
}
