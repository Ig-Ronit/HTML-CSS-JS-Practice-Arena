let str = "Good Morning Velocity, such a beutiful day. Have a great Morning"; // "", '', ``(backtick)
console.log(str);
console.log(typeof str);

// let student = "Amar";

// console.log(str, ",", student);
// console.log(str + "," + student);
// console.log(`${str}, ${student}`); //feature of ES6 `${}`
// console.log(`Good Morning ${student}`);

// General methods : .length

// // methods in string
// // length => return of number of  characters in string
// console.log(`length of ${str} is`, str.length);

// // searching purpose: includes, indexOf, lastIndexOf

// // includes => search => true/false
// let includes = str.includes("velocity");
// console.log("includes", includes);

// // indexOf => return first occurance of subString in string => important
// let indexOf = str.indexOf("day");
// console.log("indexOf", indexOf);

// //lastIndexOf=> return first occurance of subString in string from last => important
// let lastIndexOf = str.lastIndexOf("day");
// console.log("lastIndexOf:", lastIndexOf);

// // cut the string (new string)- slice, substring

// // slice eg-1
// let slice1 = str.slice(0, 4); // from 0 to 4(excluded)
// console.log("slice:", slice1);

// // //slice eg-2 // from index 5 to end of string
// let slice2 = str.slice(5);
// console.log("slice2:", slice2);

// // //slice eg-3
// let slice3 = str.slice(5, -10);
// console.log("slice3:", slice3);

// // substring = > like-similar with slice
// let subString1 = str.substring(0, 4); // from 0 to 4
// console.log("substring:", subString1);

// // //substring eg-2 // from index 5 to end of string
// let substring2 = str.substring(5);
// console.log("substring2:", substring2);

// // //substring eg-3 => hint: do not remember this example
// let substring3 = str.substring(5, -10);
// // console.log()

// // // -10 => convert to 0
// // // str.substring(5, 0);// swapping
// // // str.substring(0, 5); // final result
// console.log("substring3:", substring3);

// to change the case => toLowerCase(), toUpperCase()
// UPPERCASE
// let upperCase = str.toUpperCase();
// console.log("upperCase:", upperCase);

// // lowercase
// let lowerCase = str.toLowerCase();
// console.log("lowercase:", lowerCase);

// let dbSavedEmail = "viratKohli@gmail.com";

// let loginScreenEmail = "VIRATKOHLI@gmail.com";

// if (dbSavedEmail.toUpperCase() === loginScreenEmail.toUpperCase()) {
//   console.log("login successfully");
// } else {
//   console.log("email is not correct, please enter again");
// }

// // replace // replace first occurance from string

// let replace = str.replace("Morning", "Evening");
// console.log("replace", replace);

// let replaceAll = str.replaceAll("Morning", "Evening");
// console.log("replaceAll", replaceAll);

// // trim

// let email = "    viratKohli@gmail.com    ";
// //sanitise
// let trim = email.trim();
// console.log("email", email);
// console.log("trim", trim);

// //concat =>

let str1 = "Good morning";
let str2 = "Have a great Day";

// str1 + str2
// let str3 = str1.concat(", ", str2);
// console.log(`concat: ${str3}`);

// // + , - , *, /
// + => concat -> join

// interview question

let str4 = str1 + ", " + str2;
console.log(`using +: ${str4}`);

let num1 = 5; // number
let num2 = "10"; //string
// addition(concat) - number will convert into string (auto typecasting)
// 5 => convert into '5'
let add = num1 + num2;
console.log(`add: ${add}`); // 510

// substraction - converting string into number for these operations -, *, /
let subNum1 = "20";
let subNum2 = 10;
let substraction = subNum1 - subNum2;
console.log(`using -: ${substraction}`);

// multiplication
let multiNum1 = 10;
let multiNum2 = "5";
let multiplication = multiNum1 * multiNum2;
console.log(`using *: ${multiplication}`);
