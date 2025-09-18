const person = {
  name: "Ajrun",
  age: 38,
  greetMe: function () {
    // console.log("this", this); // point to person object
    console.log("Hello, " + this.name);
  },
  greetMe2() {
    // ES6 feature // shorthand way to write method
    console.log("Hello, " + this.name + " this is from greet2");
  },
  // this object is not bound with person object
  greetUsingArrow: () => {
    console.log("Hello, " + this.name + " this is using arrow function");
  },
};

// console.log("this outside", this); // poing to window object
// console.log("person", person);
person.greetMe();

const person2 = {
  name: "Karn",
  age: 40,
};

// person.greetMe.call(person2);