// function declaration
// IIFE => Immediately Invoked Function Expression
// normal function = function declaration = function expression
// output tracing question

(function hello(param) {
  console.log("hello there", param);
})("Amol");

// run only once

// hello();
// hello();
// hello();
// hello();
// hello(); function calling
// hello();

// scope

const counter = (function () {
  let count = 0; // private

  return {
    increament: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
})();

// console.log("count", count);

console.log("increment", counter.increament());
console.log("increment", counter.increament());
console.log("increment", counter.increament());

console.log("decrement", counter.decrement());

// keep it private

(function () {
  const API_KEY = "tesjksljflsyukjh23,msnfskfjsldfu87";
  console.log("program started", API_KEY);
})();

console.log(API_KEY);

//
