// 1 . normal function => function statement
// 2. DRY
// 3. Function Declaration => it will have always name
// 4. Arguments and parameter
// 5. Function calling
// 6. return
// 7. function Expression , it can 👇🏻
//      a. named function  => do not use(but study for interview)
//      b. unnamed function  => using daily in programming
// 8. arrow function and its variations
// 9. callback function
// 10.higher order function
// 11.first class function
// map, filter, reduce
//

// function declaration - you just defined the function

function findLastIndexOfValue(arr, searchValue) {
  // parameters => it received the data (container)
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === searchValue) {
      console.log(`Found number at index`, i);
      lastIndexOf = i;
      break;
    } else {
      // console.log("checking number:", arr[i]);
    }
  }
}

// calling function 1st time
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 50];
let search = 50;
let lastIndexOf; // index 8
// findLastIndexOfValue(arr, search); // when we are passing data to function => arguments => actual values

// calling function 2nd time
let arr2 = [98, 78, 65, 89, 34, 12, 43];
let search2 = 65; // index 2

// findLastIndexOfValue(arr2, search2); //  function calling

// calling function 3rd time
let arr3 = [98, 78, 65, 85, 34, 11, 40];
let search3 = 34; // index 2
let lastIndexOf3;
// findLastIndexOfValue(arr3, search2);

//
function convertToUpperCase(name) {
  console.log(`Hey ${name.toUpperCase()}, how are you`);
  let convertedDataInFunction = name.toUpperCase();
  return convertedDataInFunction;
}

let convertedData = convertToUpperCase("Gauri");
console.log("convertedData", convertedData);

// function Expression
// a function assigned to a variable

// with named function
const convertToUpperCaseVariable = function convertToUpperCaseFunction(name) {
  console.log(`Hey ${name.toUpperCase()}, how are you`);
  let convertedDataInFunction = name.toUpperCase();
  return convertedDataInFunction;
};

// without naming the fuction  // unnamed // anonymous function
const convertToUpperCaseVariableWithoutNaming = function (name) {
  console.log(`Hey ${name.toUpperCase()}, how are you`);
  let convertedDataInFunction = name.toUpperCase();
  return convertedDataInFunction;
};

convertedData = convertToUpperCaseVariable("Arjun");
console.log("convertedData", convertedData);

convertedData = convertToUpperCaseVariableWithoutNaming("Ram");
console.log("convertedData", convertedData);
