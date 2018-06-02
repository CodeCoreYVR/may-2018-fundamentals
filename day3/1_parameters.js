// parameters - things that go inside the function
function greet() {
  console.log("Hi!");
}

greet();
greet();
greet();

// name is a parameter
// it's creating a temporary variable, a scope variable
function greet(name) {
  console.log("Hi " + name);
}

greet("Ciro");
console.log(name); // will error
greet("Asal");
greet("Cale");
