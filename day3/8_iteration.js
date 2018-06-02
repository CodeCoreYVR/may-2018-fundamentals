// while
// for loops

// for..of

let shoppingList = ["beer", "chips", "dip"];

// sometimes, we are dealing will really large data sets
for (let item of shoppingList) {
  console.log(item);
}

// total sales
let sales = [2.99, 10000, 1500];
let total = 0;

for (let sale of sales) {
  total += sale;
}

console.log("The total sales for the day were: " + total);




// 
