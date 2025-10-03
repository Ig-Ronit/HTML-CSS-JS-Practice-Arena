const person = {
  name: "Karn",
  age: 40,
  city: "Delhi",
};

// person = {};
Object.freeze(person);
Object.seal(person);

person.name = "Arjun"; // update
person.country = "India"; // new key
// Object.keys()
console.log("Objcet.keys", Object.keys(person));

// Object.values
console.log("Object.values()", Object.values(person));

// Object.entries
console.log("Object.entries", Object.entries(person));

// Object.hasOwn()
console.log("Object.hasOwn", Object.hasOwn(person, "name"));

//person.hasOwnProperty
console.log("person.hasOwnProperty", person.hasOwnProperty("address"));