// Higher order function
// find *
// every *
// some *
// forEach *
// sort *

// for in *
// for of *

// object

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 50, 110, 100, 4];

// forEach => similar to map
// it does not return anything

let result = [];
arr.forEach((currentElement) => {
  result.push(currentElement * 2);
});
console.log("result", result);

// // some() => boolean => similar to includes
// // true / false

const some = arr.some((currentElement) => {
  return currentElement === 100;
});

console.log("some", some);

// // every => boolean
// // all element should pass the condition

const every = arr.every((currentElement) => {
  return currentElement > 5;
});

console.log("every", every);

// // find()
// // return first match element or undefined if condition does not meet

const find = arr.find((currentElement) => {
  return currentElement % 2 === 1;
});

console.log("find", find);

// // sort

let strName = ["Karn", "Arjun", "Bhim", "Krishna", "Sahdev"];
strName.sort();
console.log("strName", strName);

let arr2 = [10, 20, 30, 40, 50, 60, 50, 70, 80, 11, 100];
arr2.sort((a, b) => {
  return b - a;
});

// // a = 80
// // b = 50
// // a-b = 30

// // a-b => negative = > a is smaller than b
// // =>  a is placed before b
// // a -b => positive => b is larger than a
// // b is placed before a

// // a - b => 0 , dont do anything

console.log("arr2", arr2);

let students = [
  { id: 1, name: "Anil", age: 21, marks: 72, subject: "Math", grade: "B" },
  { id: 2, name: "Sneha", age: 20, marks: 88, subject: "English", grade: "A" },
  { id: 3, name: "Ravi", age: 22, marks: 33, subject: "Science", grade: "D" },
  { id: 4, name: "Pooja", age: 21, marks: 91, subject: "Math", grade: "A+" },
  { id: 5, name: "Sachin", age: 20, marks: 27, subject: "History", grade: "F" },
  { id: 6, name: "Meena", age: 23, marks: 64, subject: "English", grade: "C" },
  { id: 7, name: "Ajay", age: 21, marks: 80, subject: "Science", grade: "B+" },
  { id: 8, name: "Kavita", age: 22, marks: 55, subject: "History", grade: "C" },
  { id: 9, name: "Nikhil", age: 23, marks: 49, subject: "Math", grade: "C-" },
  {
    id: 10,
    name: "Bhavna",
    age: 20,
    marks: 76,
    subject: "English",
    grade: "B+",
  },
];

const list = students
  .sort((a, b) => {
    return b.age - a.age;
  })
  .map((currentElement) => {
    currentElement.name = currentElement.name.toUpperCase();
    return currentElement;
  })
  .filter((currentElement) => {
    return currentElement.marks > 60;
  });

console.log("students", list);

// //----------------------------------------------
// // for in => object + array
// // mainly for object

// // object
// const user = {
//   name: "Saiprasad",
//   age: 30,
//   role: "MERN Stack Developer",
// };

// for (let key in user) {
//   console.log(`${key} : ${user[key]}`);
// }

// // array => index + value
// let strName2 = ["Karn", "Arjun", "Bhim", "Krishna", "Sahdev"];

// for (let index in strName2) {
//   console.log(`${index}: ${strName2[index]}`);
// }
// //------------------------------------------
// // for of => array, strings, map, set
// // not for object

// console.log("using for-of ");
// for (let name of strName2) {
//   console.log(name);
// }

// let str = "Javascript";
// for (let char of str) {
//   console.log(char);
// }

// // for-in, for-of, forEach, for
