// 1 Count Occurrences of Each Word

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurrencesOfFruits = words.reduce((acc, currentFruit) => {
  if (acc[currentFruit]) {
    acc[currentFruit] += 1;
  } else {
    acc[currentFruit] = 1;
  }
  return acc;
}, {});

console.log("occurrencesOfFruits", occurrencesOfFruits);

// acc = {}

// { apple: 3, banana: 2, orange: 1 }

// 2 Find the Longest Word

const animals = ["elephant", "dog", "hippopotamus", "cat", "giraffe"];
const largest = animals.reduce((longest, currentAnimal) => {
  if (longest.length < currentAnimal.length) {
    longest = currentAnimal;
  }
  return longest;
}, "");
console.log("largest", largest);
// longest = ""

// // hippopotamus

// // 3 Group Objects by a role

const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
  { name: "Eve", role: "manager" },
];

const groupByRole = people.reduce((groups, currentPerson) => {
  if (groups[currentPerson.role]) {
    groups[currentPerson.role].push(currentPerson.name);
  } else {
    groups[currentPerson.role] = [currentPerson.name];
  }
  return groups;
}, {});

console.log("groupByRole", groupByRole);
// // output
// {
//     "admin": [
//         "Alice",
//         "Charlie"
//     ],
//     "user": [
//         "Bob",
//         "David"
//     ],
//     "manager": [
//         "Eve"
//     ]
// }

// //4.  Merge Multiple Arrays into a Unique Sorted Array
// // nested array = array of array

const arrays = [
  [3, 1, 4],
  [2, 4, 6],
  [5, 3, 7],
  [10, 100, 1000],
];
// for
const singleArray = arrays
  .reduce((acc, currentArray) => {
    for (let i = 0; i < currentArray.length; i++) {
      const element = currentArray[i];
      if (!acc.includes(element)) {
        acc.push(element);
      }
    }
    return acc;
  }, [])
  .sort((a, b) => {
    return a - b;
  });
// a - b => positive a > b => switch the position of elements in array

console.log("singleArray", singleArray);

// // acc =  []

// // 5 task convert input data to desired output

// let empData = [
//   { id: 1, place: "bengaluru", name: "abc" },
//   { id: 2, place: "mumbai", name: "bcd" },
//   { id: 3, place: "mumbai", name: "cde" },
//   { id: 4, place: "bengaluru", name: "def" },
// ];

// let desireOutput = empData.reduce((acc, currentRecord) => {
//   if (acc[currentRecord.place]) {
//     acc[currentRecord.place].push(currentRecord);
//   } else {
//     acc[currentRecord.place] = [currentRecord];
//   }
//   return acc;
// }, {});

// console.log("desireOutput", desireOutput);

// let output = {
//   bengaluru: [
//     { id: 1, place: "bengaluru", name: "abc" },
//     { id: 4, place: "bengaluru", name: "def" },
//   ],
//   mumbai: [
//     { id: 2, place: "mumbai", name: "bcd" },
//     { id: 3, place: "mumbai", name: "cde" },
//   ],
// };

// // task 6 find the total valid voted count

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

// const totalValid = voters.reduce((acc, currentVoter) => {
//   if (currentVoter.voted) {
//     acc += 1;
//   }
//   return acc;
// }, 0);

// console.log("totalValid", totalValid);

// // total voter count  : 7

// // let obj = {};

// // console.log("obj", obj);

// // obj["key1"] = "Value 1";
// // obj.key2 = "Value 2";

// // console.log("obj", obj);

// // console.log(obj.key1);
// // console.log(obj["key2"]);

// // let currentKay = "Key3";

// // obj[currentKay] = "currentValue";

// // console.log("obj", obj);

// let arr = ["Rohan", "Rohit"];
// arr.push("ROhini");

// let students = [
//   { id: 1, name: "Anil", age: 21, marks: 72, subject: "Math", grade: "B" },
//   { id: 2, name: "sneha", age: 20, marks: 88, subject: "English", grade: "A" },
//   { id: 3, name: "Ravi", age: 22, marks: 33, subject: "Science", grade: "D" },
//   { id: 4, name: "Pooja", age: 21, marks: 91, subject: "Math", grade: "A+" },
//   { id: 5, name: "Sachin", age: 20, marks: 27, subject: "History", grade: "F" },
//   { id: 6, name: "Meena", age: 23, marks: 64, subject: "English", grade: "C" },
//   { id: 7, name: "Ajay", age: 21, marks: 80, subject: "Science", grade: "B+" },
//   { id: 8, name: "KAVITA", age: 22, marks: 55, subject: "History", grade: "C" },
//   { id: 9, name: "Nikhil", age: 23, marks: 49, subject: "Math", grade: "C-" },
//   {
//     id: 10,
//     name: "Bhavna",
//     age: 20,
//     marks: 76,
//     subject: "English",
//     grade: "B+",
//   },
// ];

// let newStudentList = students
//   .map((currentRecord) => {
//     currentRecord.name = currentRecord.name.toUpperCase();
//     return currentRecord;
//   })
//   .filter((currentRecord) => {
//     if (currentRecord.marks >= 60) {
//       return currentRecord;
//     }
//   });

// console.log("newStudentList", newStudentList);

// Uppercase => marks > 60
// find
// every
// some
// forEach
// sort
// for in
// for of

// types of function
// pure function
// IIFI function
// closure  - lexical scope -> scope -> let/const
// recursive function
// spread operator  ...
// using object + array
