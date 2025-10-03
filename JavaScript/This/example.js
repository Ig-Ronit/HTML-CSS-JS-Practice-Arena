// "use strict";
var globalVariable = "this is inside global scope";
// window object
console.log("window", window);
console.log("this", this); // global scope
console.log(globalVariable);
console.log(window.globalVariable);
console.log(this.globalVariable);

// this is inside of function
function insideFunction() {
  console.log("inside function", this);
}

insideFunction();

// this inside of object

const user = {
  name: "Karn",
  getName: function () {
    console.log("inside object with function", this);
    console.log("hey " + this.name);
  },
};

user.getName();

const user2 = {
  name: "Arjun",
  getName: () => {
    console.log("inside object with arrow function", this); //surrounding lexical scope
  },
};

user2.getName();

// this inside class

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log("hello " + this.name);
  }
}

const p1 = new Person("Sunil");
p1.getName();

// call/apply/bind

const student = {
  name: "Karn",
  getName: function () {
    console.log("hey " + this.name);
  },
};

const sudent2 = {
  name: "Arjun",
};
student.getName();

student.getName.call(sudent2);