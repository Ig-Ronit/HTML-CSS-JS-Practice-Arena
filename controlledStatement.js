// if(condition){ //condition is true
//     // run this block
// }else{
//     // run this block if condition failed
// }
//-----------------------------------------------------------------------

// criteria 18 < age => eligilible for vote
// console.log("Start\n\n\n");

// let age = prompt("Enter you age");

// if (age >= 18) {
//   console.log("you are eligible for vote");
// } else {
//   console.log("you are NOT eligible for vote");
// }
// console.log("\n\n\n End");

//-----------------------------------------------------------------------

let input = prompt("Enter the number");

// even => input % 2 ===0 even
// odd => input %2 ===1
// isNan =>
if (isNaN(input)) {
  console.log("This is not valid number");
} else if (input % 2 === 0) {
  console.log(input + " number is even");
} else {
  console.log(input + " number is odd");
}

console.log(typeof NaN);

//-----------------------------------------------------------------------

// let marks = prompt("Enter the Marks");

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60 && marks <= 79.9) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Grade C");
} else if (marks >= 30) {
  console.log("Grade D");
} else {
  console.log("failed");
}

//-----------------------------------------------------------------------

let user = "admin"; //prompt("Enter the Role");
let password = "1234"; //prompt("Enter the password");

if (user === "admin") {
  if (password === "1234") {
    console.log("login successfully");
  } else {
    console.log("password is wrong, try again");
  }
} else {
  console.log("Invalid user, please try again");
}

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

// ternary operator
// shorthand alternative to if-else

// let age = prompt("Enter the Age");
// let result;

// if (age > 18) {
//   result = "Adult";
// } else {
//   result = "Minon";
// }
// console.log("person is " + result);

// // //syntax
// // // condition ? expressionIfTrue : expressionIfFalse

// age > 18 ? (result = "Adult") : (result = "Minon");

// console.log("person is " + result);

//---------------------------------------------------------

// let input = prompt("Enter the number");

// if (isNaN(input)) {
//   console.log("Enter valid number");
// }

// // even => input % 2 ===0 even
// // odd => input %2 ===1
// // isNan =>
// // if (isNaN(input)) {
// //   console.log("This is not valid number");
// // }
// let result;

// // if (input % 2 === 0) {
// //   result = "even";
// // } else {
// //   result = "odd";
// // }

// input % 2 === 0 ? (result = "even") : (result = "odd");

// console.log("Number is " + result);

//---------------------------------------------------------

// let marks = prompt("Enter the Marks");

// let grade;
// marks >= 80
//   ? (grade = "A")
//   : marks >= 60
//   ? (grade = "B")
//   : marks >= 40
//   ? (grade = "C")
//   : marks >= 30
//   ? (grade = "D")
//   : (grade = "Failed");

// console.log("here is your Grade: ", grade);

// if (marks >= 80) {
//   console.log("Grade A");
// } else if (marks >= 60 && marks <= 79.9) {
//   console.log("Grade B");
// } else if (marks >= 40) {
//   console.log("Grade C");
// } else if (marks >= 30) {
//   console.log("Grade D");
// } else {
//   console.log("failed");
// }

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

let marks = prompt("Enter the Marks");
marks = parseInt(marks);
console.log("marks", marks);
let grade;

switch (true) {
  case marks >= 80: {
    grade = "A";
    break; // switch  -  loopping - for/while
  }
  case marks >= 60: {
    grade = "B";
    break;
  }
  case marks >= 40:
    grade = "C";
    break;
  case marks >= 30:
    grade = "D";
    break;
  default:
    grade = "Failed";
}
console.log("your grade is: ", grade);

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60 && marks <= 79.9) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Grade C");
} else if (marks >= 30) {
  console.log("Grade D");
} else {
  console.log("failed");
}

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

// let str = "Good morning !";
// console.log(str);
// // falsy values
// // 1. false
// // 2. 0
// // 3. ''
// // 4. null
// // 5. undefined
// // 6. NaN - isNaN

// if (false) {
//   console.log("isItWorking ?");
// }
