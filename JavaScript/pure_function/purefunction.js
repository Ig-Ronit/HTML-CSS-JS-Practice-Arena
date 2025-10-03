// map, filter, reduce => pure function
// existing data => does not modify
// state management in redux

// same input => same output
// does not change external state/ data in global object or external function's state

let a = 2;
let b = 3;

function add(param1, param2) {
  return param1 + param2;
}

console.log(add(30, 15));

// inpure function

let result;

console.log("result", result);

function multify(param1, param2) {
  result = param1 * param2;
}
multify(2, 5);

console.log("result", result);
