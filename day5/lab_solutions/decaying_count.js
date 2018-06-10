// Assignment: Decaying Count
// Write some code that writes "1" to the console,
// then 1 second later writes "2" to the console,
// then 2 seconds after that writes "3" to the console,
// ...until it gets to "10".


// Step 1: Write an empty function called decayingCount
// Step 2: Inside the function write a for loop
// Step 3: Inside the for loop, use setTimeout to console.log the number


// Hint: For this situation the old style for loop would be suited best
//       for (let i = 0; i <= 25; i++) { ??? }

// Hint: setTimeout takes two arguments, a function and number

const decayingCount = function() {
  // This delay variable will determine how long the function waits to execute
  let delay = 0

  for (let i = 0; i <= 5; i++) {
    // We increase the delay by adding each iteration of i
    delay += i

    // setTimeout(callbackFunction, milliseconds)
    setTimeout(function() { console.log(i) }, delay * 1000)
  }
}
