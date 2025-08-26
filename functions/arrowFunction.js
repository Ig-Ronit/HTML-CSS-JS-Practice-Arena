// syntax variations in arrow function
const findSquare = (number) => {
  return number * number; // 1 single line
};

let number = 6;

// es6 ${}
console.log(`Square of ${number} is ${findSquare(number)}`); // backtick
console.log("Square of" + number + "is" + findSquare(number)); // before 2015(ES6)

// syntax variation  1
// one-liner with return

const findSquare2 = (number) => number * number;
console.log(`Square of with single line:  ${number} is ${findSquare2(number)}`);

// syntax variation 2
// one parameter

const findSquare3 = (number) => number * number;
console.log(`Square of with single line:  ${number} is ${findSquare3(number)}`);
