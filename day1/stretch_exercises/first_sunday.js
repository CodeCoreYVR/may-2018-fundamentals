// Write a JavaScript program to find the first occurrence of the
// 1st of January being a Sunday between 2014 and 2050.

// Solution Using a while loop
// Note: I commented out the break so the code will list all Sundays
//       Uncomment it to stop at the first Sunday.

for(let year = 2014; year <= 2050; year ++) {
  let date = new Date(year, 0, 1)

  if(date.getDay() === 0) {
    console.log(date)
    // break
  }
}
