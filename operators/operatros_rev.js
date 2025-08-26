// assignment operators
// =,  +=, -=, *=, /=

let device = "Samsung";

let marks = 60;

// arithmetic operations

marks = marks + 5; // 65

console.log("marks", marks);

marks += 10; // marks = marks + 10;  //75
console.log("marks", marks);

marks *= 2; // 150
console.log("marks", marks);

//
let num = 11; // if num is even  or odd even(2,4,6,8,10) odd(1,3,5,7,9)

let reminder = num % 2; // 0

if (reminder === 0) {
  console.log("even");
} else {
  console.log("odd");
}
console.log("reminder", reminder);

let power = 2;
console.log("power of", num ** power);
