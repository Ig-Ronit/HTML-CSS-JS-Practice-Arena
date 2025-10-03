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

// map => transformation of data
// const numbers = [1, 2, 3, 4, 5];

// // arrow function as params
// const doubled = numbers.map((currentElement) => {
//   return currentElement * 2;
// });

// // unnamed function as params
// const tripled = numbers.map(function (currentElement) {
//   return currentElement * 3;
// });

// // normal function

// function getSquare(num) {
//   return num * num;
// }

// const square = numbers.map(function getSquare(currentElement) {
//   return currentElement * currentElement;
// });

// // console.log("doubled", doubled);
// // console.log("tripled", tripled);
// // console.log("square", square);

// const multiplyOf10 = numbers.map((currentElement, currentIndex) => {
//   return currentElement * 10;
// });

// console.log("multiplyOf10", multiplyOf10);

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

// const arr2 = [2, 40, 5, 10, 2, 15, 11, 12, 52];

// const greaterThan10 = arr2.filter((currentElement) => {
//   return currentElement > 10;
// });

// console.log("greaterThan10", greaterThan10);

// const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evens = naturalNumbers.filter((currentElement) => {
//   return currentElement % 2 === 0;
// });

// const odds = naturalNumbers.filter((currentElement) => {
//   return currentElement % 2 === 1;
// });

// console.log("odds", odds);

// const numbers = [1, 2, 3, 4, 5, 6];

// let sum = 0; // accumulator

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

// console.log("sum", sum);

// //1. send accumulator in params
// //2. intialize accumulator
// // 3. you need to return accumulator

// // 15

// let sumUsingReduce = numbers.reduce((acc, currentElement) => {
//   acc = acc + currentElement;
//   return acc;
// }, 0);

// console.log("sumUsingReduce", sumUsingReduce);

// max =0, max < currentElement

const numbers = [-10, -5, -2, -1, 5];
const max = numbers.reduce((acc, currentElement) => {
  if (acc < currentElement) {
    acc = currentElement;
  }
  return acc;
}, -Infinity);

// console.log("max", max);

// reduce
const number = [
  1, 2, 1, 1, 3, 4, 5, 6, 2, 3, 2, 7, 8, 5, 6, 3, 42, 2, 34, 7, 10, 9, 7,
];

// count the the each numbers map, filter, reduce

// technical lead

const repeatedNumObj = number.reduce((acc, currentElement) => {
  if (acc[currentElement]) {
    acc[currentElement] += 1;
  } else {
    acc[currentElement] = 1;
  }
  return acc;
}, {});

console.log("repeatedNumObj", repeatedNumObj);
