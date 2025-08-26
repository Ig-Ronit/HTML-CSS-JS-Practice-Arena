// comparison operation give result as true/false only

// loosely comparison => value  ==
console.log(5 == 5); // true
console.log(5 == "5"); // true // string to number => convert => coercion

// "5" => convert it to number
// then we compare

// strict comparison => value + data type
console.log('5 === "5"', 5 === "5");

// ===

// false => 0 , true => 1
console.log("0 == false", 0 == false); // 0 == 0
console.log("0 === false", 0 === false);

//"", (false)boolean => number => 0
//"" => 0
// false => 0

console.log('" == false', "" == false);
console.log('" === false', "" === false);

// RARE CASE (Interview)

console.log("null == undefined", null == undefined);
console.log("null === undefined", null === undefined);

let enteredPin = "1234";
let dbSavedPin = 1234;

console.log(enteredPin == dbSavedPin); // true
console.log(enteredPin === dbSavedPin); //false

// !=  // not equal to

let a = 4;
let b = "5";

console.log("a === b", a === b); // false
console.log(a !== b); // true

let userIdFromDb = 100;
let userIdFromForm = "100";
let isMisMatch = userIdFromDb !== userIdFromForm;

console.log("isMisMatch", isMisMatch); // => true

// greater than => if first operand is greater that second
console.log("4 > 2", 4 > 2); // true
console.log("4 < 2", 4 < 2); // false

let temperature = 10;

let isAboveFreezing = temperature < 0;
console.log("isAboveFreezing", isAboveFreezing);

// greater than or equal to
let userAge = 18;
let canVote = userAge >= 18;
console.log("canVote", canVote);

// less than <

console.log("10 < 20", 10 < 20); // true
console.log("10 < 5", 10 < 5); // false

// less than or equal to

// let kidAge = 11;
let kidAge = 13;
let isFreeTicket = kidAge <= 12;
console.log("isFreeTicket", isFreeTicket);

console.log("5" > 2); // "5" convert to 5
console.log(true < 2); // true convert to number => 1 => 1 < 2
console.log(null < 1); // null convert to number => null => 0 => if 0 < 1

// && (and) ||(OR - or)

// let isLoggedIn = true;
// let isTakenSubscription = true;
// let canAccessHotStar = isLoggedIn && isTakenSubscription;
// console.log("canAccessHotStar", canAccessHotStar);

let isLoggedIn = false;
let isTakenSubscription = false;
let canAccessHotStar = isLoggedIn && isTakenSubscription;
console.log("canAccessHotStar", canAccessHotStar);

// falsy values = > '', 0, false, undefined, null
