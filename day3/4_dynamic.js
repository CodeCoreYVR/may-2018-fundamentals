// dynamic
function add(number1, number2) {
  return number1 + number2;
}

function add(number1, number2, number3) {
  return number1 + number2 + number3;
}

function add(number1, number2, number3, number4) {
  return number1 + number2 + number3 + number4;
}

// rest, stread
function add(...numbers) {
  //
  console.log(numbers)
}

add(5, 6);
add(1,2,3,4,5,6,7,8,9,10);
