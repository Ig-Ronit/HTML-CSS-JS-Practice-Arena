var gloablVariable = 10; // global scope

function outerFunction() {
  // local scope + lex env of parent(global object)
  var outerVarA = 20; // function scope
  console.log("from outerFunction calling gloablVariable", gloablVariable);

  function innerFunction() {
    var innerVarB = 30; // local scope + lexical env of parent(outerFunction)
    console.log("from innerFunction calling outerVarA", outerVarA);
    console.log("from innerFunction calling gloablVariable", gloablVariable);
    console.log("from innerfunction calling innerVarB", innerVarB);
  }
  innerFunction();
}

outerFunction();

// function counter() {
//   let count = 0; //function or local scope
//   return function increment() {
//     // var a, b
//     return ++count;
//   };
// }

// let func = counter();

// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
