// pure functions

function doubleArray(arrOfNumbers) {
  return arrOfNumbers.map((element) => {
    return element * 2;
  });
}

const arr = [1, 2, 3, 4];
console.log(doubleArray(arr));
// console.log("arr", arr);

// inpure function

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var evenArr = []; // global execution context

console.log("evenArr before", evenArr);

function makeEven(arr) {
  // data updated in global execution context
  arr.forEach((element) => {
    if (element % 2 == 0) {
      evenArr.push(element);
    }
  });
}

makeEven(arr2);

console.log("evenArr after", evenArr);
