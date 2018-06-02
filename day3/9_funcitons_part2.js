// find out the total sales using a function
function add(...sales) {
  console.log(sales);
  let total = 0;
  for (let sale of sales) {
    total += sale;
  }

  // meaningful value
  return total
}

add(2.99,10000,1500) == 11502.99;

// Array methods
// array have built in functions
let shoppingList = ["beer", "chips", "dip"];
shoppingList.push("diaper");
shoppingList.shift(); // removes beer?

// function push(item) {
//   //add the item onto the end of the list
// }


// push, pop, slice, shift, sort
// https://www.w3schools.com/js/js_array_methods.asp
// MDN JavaScript Arrays

//
