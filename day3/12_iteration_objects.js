// iteration over an object
const me = {
  name: "Jacob",
  age: 39,
  profession: "teacher",
  // searchProperty
};

// properties == keys
Object.keys(me); // <-
Object.values(me);

// iteration, for..in for objects / for..of for arrays
for (let property in me) {
  console.log(property); // property
  console.log(me[property]); // value
}

me.name; // "Jacob"
me["name"]; // "Jacob"

let searchProperty = "age";
me[ searchProperty ]; // 39

me[ "age" ]; // 39
me[ searchProperty ] == me["age"];

//
