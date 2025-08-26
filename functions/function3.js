// a();
// b();

var a = function () {
  console.log("hello there");
};

a();

function b() {
  console.log("hello b");
}

// hoisting

console.log(myVar); // Output:

myVar(); // Output: This is a function named myVar

var myVar = 5;

function myVar() {
  console.log("This is a function named myVar");
}

console.log(myVar); // output:

var myVar = {
  name: "John",
  age: 30,
};
