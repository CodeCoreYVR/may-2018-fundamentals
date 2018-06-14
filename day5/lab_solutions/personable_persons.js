// Assignment: [Lab] Personable Persons
// Create two person objects with an "age" attribute and a "name" attribute.
// Then, add a "greet" method to both people. The method should accept a person
// as a parameter and outputs the following:

// "Hello, [name1]. I am [name2]. Pleased to meet you." if person1 is older than person2.
// "Yo [name2]. I'm totally [name1]. Wsup!." if person2 is older than person1.

// https://www.w3schools.com/js/js_object_definition.asp

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet(friend) {
    if (this.age > friend.age) {
      return(`Hello, ${friend.name}. I am ${this.name}. Pleased to meet you."`)
    } else {
      return(`Yo ${friend.name}. I'm totally ${this.name}. Wsup!."`)
    }
  }
}

let ciro = new Person('Ciro', 21)
let cale = new Person('Cale', 25)
ciro.greet(cale)
cale.greet(ciro)
