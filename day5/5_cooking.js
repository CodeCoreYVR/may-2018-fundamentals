// cooking!
const cookie = {
  // properties
  sugar: 10,
  flour: 20,
  // behaviors, methods
  bake: function() {},
  eat: function() {}
};

const cookie = {
  // properties
  sugar: 20,
  flour: 40,
  // behaviors, methods
  // : function is optional
  bake() { console.log(`baking a cookie with ${ cookie.sugar }g of sugar and ${ cookie.flour }g of flour`) },
  eat() { console.log("eating...") }
};

cookie.bake();
cookie.sugar; // 10
cookie.flour; // 20
cookie.eat();

// arrow syntax
// const cookie = {
//   // properties
//   sugar: 10,
//   flour: 20,
//   // behaviors, methods
//   // : function is optional
//   bake => console.log("baking...") },
//   eat => console.log("eating...") }
// };
