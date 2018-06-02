// mathematics
function add() {
  console.log(1 + 1);
}

add();

function add(number) {
  console.log(number + 1);
}

add(5);

// the variables that temporarily hold our values are parameters
function add(number1, number2) {
  console.log(number1 + number2);
}

// the values we pass into a function are called arguments
add(5, 6);
add(10, 2);
add(3.141, 42);
