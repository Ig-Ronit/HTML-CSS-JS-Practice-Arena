// global scope
var a = 10; // global variable  // it can access from anywhere
console.log(window); // global object
console.log(window.a);

// block scope => let/ const
{
  let blockLevelLet = "hey there";
  var blockLevelVar = "999";
  console.log("blockLevelLet", blockLevelLet);
}

console.log("blockLevelVar", blockLevelVar);

// console.log("access it from outside blockLevelLet", blockLevelLet); // error

// function scope / local scope
function showNumber() {
  var b = 20; // local scope or function scope // it will only access within function
  console.log("a from showNumber", a); //  a is global varible
  console.log("b from shownumber", b); // b local scope varible
  console.log("c from shownumber", c); // b local scope varible

  function showB() {
    var c = 100;
    console.log("b from function showB", b);
  }
  showB();
}

console.log("b from outside", b); // b local scope varible

console.log("c from outside shownumber", c);
showNumber();
