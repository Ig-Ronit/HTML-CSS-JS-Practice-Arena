// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 1; // init
// while (i <= 5) {
//   // condition
//   console.log(i);
//   i++; // increment
// }

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// let j = 0;
// while (j < arr.length) {
//   sum = sum + arr[j];
//   j++;
// }
// console.log("Sum", sum);

// let i = 1;
// do {
//   console.log("i:", i);
// } while (i <= 5);

// 1. enter correct password

// let password = "";
// let attemp = 0;

// while (password != "12345" && attemp < 3) {
//   password = prompt("Enter your password:");
//   attemp++;
// }
// if (password === "12345") {
//   console.log("Access Granted");
// } else {
//   console.log("Access Denied. Too many attempts");
// }

// eg:2 Guess fav subject

// let answer = "";
// let correct = "Javascript";

// while (answer != correct) {
//   answer = prompt("what is your fav subject:");
// }
// if (answer === correct) {
//   console.log("Congratulation... you are out this loop");
// }

// eg:3 do-while

//  take numbers as input, and if the input is 'exit' then exiting the do-while
// after exit return sum of all input

// let input;
// let sum = 50;

// do {
//   input = prompt(
//     "Enter number to sum the numbers or enter 'exit' to see the sum"
//   );
//   // do addition only if input is not a string and it should be number
//   if (!isNaN(input)) {
//     sum = sum + parseInt(input); //type casting from string to number
//   }
// } while (input != "exit");

// console.log("Final Sum is:", sum);

// break + continue
// break => loop + switch

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

let search = 50;
let indexOf;
let lastIndexOf;

for (let i = arr.length - 1; i > 0; i--) {
  if (arr[i] === search) {
    console.log(`Found number at index`, i);
    lastIndexOf = i;
    break;
  } else {
    console.log("checking number:", arr[i]);
  }
}

// console.log("lastIndexOf of 50 is", lastIndexOf);

// continue
// sum => positive number sum => 1, 3, 6, 1, 6,
// let arr2 = [1, 3, 6, -3, -6, 0, 1, 6, -2];
// let sum = 0;

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] <= 0) {
//     console.log("number is non positive", arr2[i]);
//     continue;
//     console.log("so avoiding sum of numbers\n\n");
//     console.log("so avoiding sum of numbers\n\n");
//     console.log("so avoiding sum of numbers\n\n");
//     console.log("so avoiding sum of numbers\n\n");
//     console.log("so avoiding sum of numbers\n\n");
//     console.log("so avoiding sum of numbers\n\n");
//     console.log("so avoiding sum of numbers\n\n");
//   } else {
//     sum = sum + arr2[i];
//   }
// }

// console.log("final sum is", sum);

// let students = [
//   { id: 1, name: "Anil", age: 21, marks: 72, subject: "Math", grade: "B" },
//   { id: 2, name: "Sneha", age: 20, marks: 88, subject: "English", grade: "A" },
//   { id: 3, name: "Ravi", age: 22, marks: 33, subject: "Science", grade: "D" },
//   { id: 4, name: "Pooja", age: 21, marks: 91, subject: "Math", grade: "A+" },
//   { id: 5, name: "Sachin", age: 20, marks: 27, subject: "History", grade: "F" },
//   { id: 6, name: "Meena", age: 23, marks: 64, subject: "English", grade: "C" },
//   { id: 7, name: "Ajay", age: 21, marks: 80, subject: "Science", grade: "B+" },
//   { id: 8, name: "Kavita", age: 22, marks: 15, subject: "History", grade: "C" },
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

// // skip the students who failed 35 > marks

// for (let i = 0; i < students.length; i++) {
//   if (students[i].marks < 35) {
//     console.log(`❌ ${students[i].name} is failed, skipping.....`);
//     continue;
//     console.log("marks are", students[i].marks);
//   } else {
//     console.log(
//       `✅ ${students[i].name} is passed with marks ${students[i].marks}`
//     );
//   }
// }

// let nestedArr = [
//   // parent array = 4
//   [3, 5, 7, 0, 70, 100], // nested array // 6
//   [2, 4, 6, 20], // 4 // length
//   [1, 8, 9], //3
//   [11, 13, 15, 80, 43], // 5
// ];

// // console.log(nestedArr[3][3]);

// let flatArr = [];
// // length = nestedArr = 4

// for (let row = 0; row < nestedArr.length; row++) {
//   for (let i = 0; i < nestedArr[row].length; i++) {
//     console.log(nestedArr[row][i]);
//     flatArr.push(nestedArr[row][i]);
//   }
// }
// console.log("flat arrat", flatArr);
