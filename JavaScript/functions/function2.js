const varName = function (name) {
  console.log("Hey ", name);
};

varName("Arjun");

// Arrow function
// removed a function keyword
// add => after the parameter

const varNameusingArrowFun = (name) => {
  console.log("Hey ", name);
};

varNameusingArrowFun("Karn");

const convertItToArrowFunctionVariable = (arr, searchValue) => {
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
};

// calling function 1st time
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 50];
let search = 50;
let lastIndexOf; // index 8
convertItToArrowFunctionVariable(arr, search);
