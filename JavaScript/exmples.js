let str = "hello world, how are you";
// 'Hello world'
// charAt
// uppercase h => H

console.log("charAt=> uppercase", str.charAt(0).toUpperCase()); // method chaining
let result = str.charAt(0).toUpperCase() + str.slice(1);
console.log("final result", result);

// eg 2
// count characters excluding spaces
// output=> helloworld,howareyou

let result2 = str.replaceAll(" ", "").length;
console.log("result2", result2);

// replce "hello-world,-how-are-you"
let result3 = str.replaceAll(" ", "-");
console.log("result3", result3);

let email = "karnsharma@gmail.com";
// output: @gmail.com
let search = email.includes("@gmail.com");
console.log("search", search);

// you are how world, hello
// reverse

let reverseWord = str.split(" ").reverse().join(" ");
console.log("reverseWord: ", reverseWord);
