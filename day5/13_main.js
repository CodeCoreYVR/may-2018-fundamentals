// JS
// console.log("Hello!");
// window.alert("How are you?");
// setTimeout(function() {
//   document.write("I am fine!");
// }, 10000);

// how do we wait for our html to be ready before we run our javascript
// window.onload = function() {
//   document.write("The page is done loading!");
// };

document.addEventListener("DOMContentLoaded", function() {
  // document.write("The page is definitely done loading...");
  document.getElementById("header").innerHTML = "Jacob's Book Store";
  let counter = 0;
  setInterval(function(){
    document.getElementById("header").innerHTML = "Jacob's Book Store: " + Math.random();
    counter++;
  }, 1000);
});







//
