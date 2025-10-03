// 1
// sayHello = variable
// type of function expression
// we can assign function to variable

// we are sending sayHello as argument so it called as callback function

// let sayHello = function () {
//   console.log("hello world");
// };

// function declaration
// we can pass function as a parameter
// we can execute it as per our requirement
// Higher order function
// - feature
// take function as argument
// return another(child) function

// function greetUser(sayHelloFunc) {
//   sayHelloFunc();
// }

// greetUser(sayHello);
//-==============================================================
// 2
//  returning function to the called function
// we can return a function from parent function
// greeMe => higher order function

function greetMe(name) {
  return function () {
    console.log("good morning, ", name);
  };
}

// closure
// greetMe("Karn");
greetMe("Arjun")();

// console.log("getName", getName);
// getName();

// first class function
// function treated as variable

// 1.function can be assigned to variable
// 2. function can be passwd as arguments
// 3. returned from parent function

// callback function

// js is not wait for anyone

// synch => line by line
// async => api/ db / third party api // 1ms

// function processDate(data, callbackFunc) {
//   // processing data
//   console.log("processing data", data); // 50 mm seconds // api
//   callbackFunc(data); // calling the function
// }

// function onCompleteProcess(data) {
//   console.log("Data processing done successfully:", data);
// }

// function startNewProcess() {
//   console.log("Starting new process");
// }

// processDate("User Info", onCompleteProcess);
// processDate("User Info - 2", startNewProcess);

// find square of number

// let square = function (num) {
//   return num * num;
// };

// const processNumber = function (number, callbackFunc) {
//   return callbackFunc(number);
// };

// const squareOfNumber = processNumber(5, square); // 25

// const cubeOfNumber = processNumber(6, (num) => {
//   return num * num * num;
// });

// console.log("squareOfNumber", squareOfNumber);
// console.log("cubeOfNumber", cubeOfNumber);

// [1,2,3,4,5] => [2,4,6,8,10](transforming) num * 2
// transformation of number

// const transformArray = (arr, callbackFunc) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     const processedNum = callbackFunc(currentElement);
//     result.push(processedNum);
//   }

//   return result;
// };

// const doubleArray = transformArray([1, 2, 3, 4, 5], (num) => {
//   return num * 2;
// });

// const tripleArray = transformArray([1, 2, 3, 4, 5], (num) => {
//   return num * 3;
// });

// console.log("doubleArray", doubleArray);
// console.log("tripleArray", tripleArray);

// // find the numbers which are above 10

// let checkIfNumberIsGreaterThan10 = (num) => {
//   return num > 10;
// };

// const filterArray = (arr, callback) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     if (callback(currentElement)) {
//       result.push(currentElement);
//     }
//   }
//   return result;
// };

// const newFilterArr = filterArray(
//   [2, 40, 5, 10, 2, 15, 11, 12, 52],
//   checkIfNumberIsGreaterThan10
// );
// console.log("newFilterArr", newFilterArr);

// newFilterArr.reverse();

//polyfill
