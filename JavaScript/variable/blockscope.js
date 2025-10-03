// let x = 100;
// let xyz = 10000;

// shadowing
// illegal shadowing

// function testingScope() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   {
//     console.log("a", b);
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log("inside testingScope function within block");
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//     console.log("xyz", xyz);
//   }
//   console.log("inside testingScope function");
//   //   console.log("a", a);
//   //   console.log("b", b);
//   //   console.log("c", c);
// }

// testingScope();

// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   {
//     // var a = 100;
//     let b = 200;
//     const c = 300;
//     console.log("inside inner block");
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//   }
//   console.log("inside outer block");

//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
// }

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

// console.log(x);

// shadowing

// shadowing

// illegal shadowing

let a = 100;

{
  var a = 10;
  console.log("from inside block a", a);
}

console.log("from outside block a", a);
