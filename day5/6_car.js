// cars!!!
const car = {
  // properties
  make: "Tesla",
  model: "Model S",
  capacity: 5,
  speed: 50,
  // methods
  // what is "this"? it asks a question.. which object is calling this method?
  // this == car
  drive() { console.log(`driving at ${this.speed}km/h...`) },
  park() { console.log("parking...") },
  stop() { console.log("stopping...") }
};
car.drive();
