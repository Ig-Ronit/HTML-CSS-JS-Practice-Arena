// // var / let / const

let Console = "Pune";
console.log(Console);

let a, b, c;
function acb() {}

name = "Shiv"; //     "    ",  '   ', `    `
Name = "Shubham"; // case sensitive

fullName = "Shiv Kumar";
console.log(fullName);

// var
// let
// const

var name = "Shiv"; // global / functional scope

// var address = "Mumbai"; // declaration and assign
// var address = "Pune"; // redeclare and assign

// code withing curly bracket is called as block
{
  let name2 = "Saee";
  name2 = "Siva";
  console.log("name2", name2);
}

//console.log("name2", name2);
// scope

// const

const PI = 3.14;

console.log(PI);

// best practice = let and const => ES6 2015

let studentName = "Arav"; // string
let age = 12; // number
let percentage = 70.5; // namber
let isQualifiedForScolership = true; // boolean true/false

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof percentage);
console.log(isQualifiedForScolership);

let address;
console.log(typeof address);

let parentInfo;
// let parentInfo; // redeclaring
parentInfo = 12;
parentInfo = 20;

console.log(typeof parentInfo);

parentInfo = null;

console.log(typeof parentInfo);

BigInt / Symbol;

// let a =
//   8273827382732768763846384687364384792839279326483764387648368463863285625763253762583463786n;

// console.log(typeof a);
// let b = BigInt(10);

console.log(typeof b);

// primitie data Types
// String
// Number
// Boolean
// undefined
// null
// BigInt
// Symbol

// Non - Primitive

// Object  *
// Array
// Function

// let studentName = "Arav"; // string
// let age = 12; // number
// let percentage = 70.5; // namber
// let isQualifiedForScolership = true; // boolean true/false
// let address;

// Object

let student1 = {
  studentName: "Arav", // studentName => key  'Arav' => value
  age: 12,
  percentage: 70.5,
  isQualifiedForScolership: true,
  address: "Pune",
};

console.log(student1);

const x = 10; //declaration + assignment

const pi = 3.14;
// pi = 1;

// array

let studentNames = [];
console.log("studentNames", typeof studentNames);

studentNames = ["Arav", "Arti", "Amar", "Bhagayshri", "Saee"];

console.log(studentNames);

let studentsAge = [12, 13, 12, 11, 15];
console.log(studentsAge);

studentInfo = ["Arav", 12, { city: "pune", pincode: "4801001" }];
console.log(studentInfo);

// dynamically typed language

let sirName = "Sharma";
console.log(typeof sirName);

sirName = 30;
console.log(typeof sirName);

let lastName = "Varma";

console.log($lastName);
