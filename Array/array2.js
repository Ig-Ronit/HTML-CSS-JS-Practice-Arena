let arr = [
  10, //0
  20, //1
  30, //2
  40, //3
  50, //4 //exclude
  { name: "Karn", age: 10 }, // 5
  60, // 6
  70, //7
  80,
  "Good morning everyone", //9
  50, //10  //7
  10, //11  //8
  11, //12  // 9
];
console.log(`Original arr: ${arr}`);

// splice - it is used to to add, update and delete the element(s) from array
// syntax =>
// arr.splice(startIndex, deleteCount, addItem1, addItem2,......)
// splice() updates the original array

// delete operation

arr.splice(6, 3);
console.log(`array splice: delete ${arr}`);

arr.splice(7, 3);
console.log(`array splice (2nd delete): ${arr}`);

// add element (without deleting)
arr.splice(2, 0, "Hey", "There");
console.log(`add element using splice: ${arr}`);

arr.splice(7, 0, 60);
console.log(`add element using splice v2: ${arr}`);

// replace(update)
arr.splice(0, 5, "a", "b", "c", "d", "e");
console.log("updated arr using splice ", arr);

// Remove all the element after the index
let deletedArr = arr.splice(5);
console.log(`delete everything after the index`, arr);
console.log(`deleted arr `, deletedArr);

// slice example
let slice = arr.slice(0, 3);
console.log(`slice`, slice);
console.log("original array,", arr);

// string => split and join method

// split => break a string into an array   = string => array
// seperator (' ', ',')

let str = "Hey-there,-how-are-you.-Very-good-morning";
let word = str.split("-");
console.log(`split method: `, word);

let str2 = "I love Javascript";
let word2 = str2.split(" ");
console.log(`split method v2:`, word2);

// array => join  =============  converting array => string
// join => combine all elements of the array into a single string
// specify joiner (' ', '-');

let arrJoin = ["But", "I", "Love", "React"]; // But I Love React
let sentance = arrJoin.join(" ");
console.log("Join:", sentance);

// split + join

let str10 = "MERN stack is fun";
// let result = str10.split(" ");
// console.log("step 1", result);

// result = result.join("-");
// console.log("step 2", result);
let result = str10.split(" ").join("-");
console.log("split + join", result);
console.log(typeof str10);
