function parent() {
  var age = 20;
  var childName = "Amit"; // childName will act as lexical variable for child function
  return function child() {
    var age = 25;
    console.log(`hello from ${childName} and my age is`, age);
  };
  //   child(); // calling
}

var res = parent();
// res();

// console.log(res);

// counter example

function outer() {
  var count = 0; // it will act as lexical variable for function inner
  count = 100;
  return function inner() {
    console.log(++count);
  };
}

// outer()();

// use cases
// data encapsulatio
// memoise => javascript
// fuction curring

// function curring

// add(4, 5); // 9
// add(4)(5); // 9 solved

// function add(a, b) {
//   if (b) {
//     return a + b;
//   }
//   return function inner(b) {
//     return a + b;
//   };
// }

function add(a = 0, b = 0) {
  function inner(b = 0) {
    return a + b;
  }

  if (a && b) {
    return inner(b);
  }
  return inner;
}

// a = 5;

console.log("add(4)(5)", add(4)(5)); // sending 1 param to function add
console.log("add(4,5)", add(4, 10)); // sending 2 params to function add
