var a = 0;

// recursive functions
function callMe() {
  console.log("callMe function is called ", ++a);

  if (a === 10) {
    return;
  }

  callMe();
}

// callMe();

// array, object, tree
// [[1, 3], 1, [3, 2, 5, [2, 3, 4]]];

// CountDown => 100 => 0 exit

function countDown(time) {
  if (time < 0) {
    return;
  }
  console.log("Time:", time);
  countDown(time - 1);
}

countDown(100);

// 5 * * 24 => 120
//  => 4 * 6 => 24
//     => 3 * 2 => 6
//      => 2 * 1 => 2
//         => 1 * 1 => 1

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1); // 5 * 4 * 3 * 2 * 1 * 1 => 120
}

console.log(factorial(5));

arr = [1, 2, 3, 4];
sum = 0;

function sumOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumOfArray(arr.slice(1));
}

// 1
// => [2, 3 , 4] => 2 , [3, 4] => 0 + 4 + 3 + 2 + 1
//     => [3, 4] => 3 , [4]
//         =>[4] => 4, []
//                 0
console.log("sumOfArray", sumOfArray(arr));

// flat array
var input = [
  1,
  "2",
  [3, "a", 5, [6, "random string", 8], [1, 2, 3, 4, 5]],
  [[[[[10]]]]],
];

console.log(input.flat(Infinity));

//
// out = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 10];

var flatArr = [];

function makeFlatArray(arr) {
  arr.forEach((i) => {
    console.log(typeof i);
    if (Array.isArray(i)) {
      makeFlatArray(i);
    } else {
      flatArr.push(i);
    }
  });
}

for (let i = 0; i < input.length; i++) {
  const element = input[i];
  if (Array.isArray(element)) {
    makeFlatArray(element);
  } else {
    console.log("the current element is not array so push it in flat array");
    flatArr.push(element);
  }
}

console.log("flatArr", flatArr);
