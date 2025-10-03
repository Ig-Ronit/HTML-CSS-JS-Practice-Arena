// find max value from the array

let arr = [10, 20, 30, 40, 50, 5, 10, 100, 95, 4, 71];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("max value:", max);
console.log("min value:", min);

// reverse the array using for loop

// console.log(arr.reverse());

let reverse = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}

console.log("reverse array", reverse);

let str = "Good Morning everyone, how are you?";

for (let i = 0; i < str.length; i++) {
  console.log(`index of str is ${i} and charAt at this str is ${str[i]}`);
}

let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr = reverseStr + str[i];
}
console.log("reverseStr", reverseStr);
