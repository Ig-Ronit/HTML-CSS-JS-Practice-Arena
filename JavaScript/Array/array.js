// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let hobbies = ["Cricket", "Football", "Gym"];
// let str = "hey there";
let arr = [
  10, //0
  20, //1
  30, //2
  40, //3
  50, //4 //exclude
  { name: "Karn", age: 10 }, // 5
  60,
  70,
  80,
  "Good morning everyone", //9
  50, //10
  10, //11
  11, //12,
  true,
  false,
  null,
];

console.log(`Original array: ${arr}`);

let arr2 = ["a", "b", "c", "d"];

// // // length => count the number of element in array
// let length = arr.length;
// console.log(`length: ${length}`);

// // // index => access the element using index
// let index = arr[5];
// console.log(`Index: ${JSON.stringify(index)}`);

// // // includes (searching); true/false
// let includes = arr.includes("Good morning everyone");
// console.log(`includes: ${includes}`);

// // // indexOf ()
// let indexOf = arr.indexOf(50);
// console.log(`indexOf: ${indexOf}`);

// // // //lastIndexOf()
// let lastIndexOf = arr.lastIndexOf(50);
// console.log(`lastIndexOf: ${lastIndexOf}`);

// slice -1 // 0-> include 4-> exclude 0-3

// let slice1 = arr.slice(0, 4);
// console.log(`slice1: ${slice1}`);

// // // slice - 2
// let slice2 = arr.slice(5);
// console.log(`slice2: ${JSON.stringify(slice2)}`);

// // console.log(typeof arr);

// // console.log("Array.isArray(arr)", Array.isArray(arr));

// // //slice - 3
// let slice3 = arr.slice(5, -5);
// console.log(`slice 3: ${JSON.stringify(slice3)}`);

// // concat method

let concatfinalArr = arr.concat(arr2, ["apple", "banana"]);
console.log(`concat: ${concatfinalArr}`);

// // add element => push, unshift
// // push => add element to the end of array
arr.push("Saee");
console.log("push: ", arr);

// // unshift method => add element to the beginning of array

arr.unshift("Kaustubh");
console.log("unshift:", arr);

// // remove element => pop , shift
// pop => remove element from the end of array
arr.pop();
console.log(`pop: ${arr}`);

// // shift => remove the element from beginning of the array
arr.shift();
console.log(`shift: `, arr);

// //
arr.length = arr.length - 2; // 13-2 => 11
console.log(`remove elements using length method: ${arr}`, arr);
console.log(`length ${arr.length}`);
// arr.length = 0;
// console.log("arr", arr);

// // reverse
// arr = arr.reverse();
// console.log(`reverse: ${arr}`);

// // sort

// let names = [
//   "Ram",
//   "Laxman",
//   "Mahesh",
//   "Karn",
//   "Aniket",
//   "Saee",
//   "anand",
//   "Gauri",
//   "Arti",
//   "Vaishali",
// ];

// names = names.sort();
// console.log(`sort:`, names);

// // names = names.reverse();
// // console.log("Descending :", names);

// names = names.sort().reverse(); // method chaining
// console.log("Descending:", names);

let nums = [1, 2, 3, 10, 100, 5, 71];
nums = nums.sort();
console.log(`number sorting: ${nums}`);

// //flat
let nestedArray = [1, 2, 3, [4, 5, [6, 7]]]; // [1,2,3,4,5]
// flat = [1, 12, 2, 5, 6, 3, 3, 2, 3, 1, 10];
let flatArray = nestedArray.flat(); // write your own method
console.log(`flatArray: ${flatArray}`);

// // splice
