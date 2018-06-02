// array exercise
// use prompt to add items to a list
// names to draw from a hat

let names = [];

while (true) {
  let name = window.prompt("Please enter a name (type 'exit' to quit): ");
  //(name == "exit") ? break : names.push(name);

  //logic gate
  if (name == "exit") {
    break;
  } else {
    names.push(name);
  }

}
// choose a winner:
// names[0]; // "Ciro"

// names is an Array
// has properties and methods: push, pop, slice, length
names[Math.floor(Math.random() * names.length)];





//
