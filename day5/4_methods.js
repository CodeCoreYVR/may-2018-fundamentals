// methods
console.log(); // log is method belonging to the console object
let shoppingList = ["kale", "acai", "goji", "quinoa"];
shoppingList.push("kambucha"); // push is method on the array object

// method - behaviour
// method actor - daniel day lewis
const mario = {
  // properties
  profession: "plumber",
  nationality: "italian",
  age: 40,
  // behaviour, what can he do?
  jump: function() { console.log("Mario is jumping!") },
  run: function() { console.log("Mario is running!") }
  // jump: function() {},
  // throwFireballs: function() {},
  // run: function() {},
  // duck: function() {},
  // fly: function() {}
};

mario.jump();
mario.run();
