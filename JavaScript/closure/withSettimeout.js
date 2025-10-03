console.log("program started");

for (var a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log("a:", a);
  }, a * 1000); // 1000, 2000, 3000, 4000, 5000
}

// solution 1 =  using let to create new block for the a
for (let a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log("a:", a);
  }, a * 1000); // 1000, 2000, 3000, 4000, 5000
}
// solution 2
function timer() {
  for (var a = 1; a <= 5; a++) {
    function z(params) {
      // using function to create new block for var a
      setTimeout(() => {
        console.log("params:", params);
      }, params * 1000); // 1000, 2000, 3000, 4000, 5000
    }
    z(a);
  }
}

timer();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// console.log("first line");

// // timer // event loop  // promise + async await
// setTimeout(() => {
//   console.log("hello from setTimeout");
// }, 1000);

// console.log("last line");

// first line
// hello from setTimeout
// last line

// first line
// last line
// hello from setTimeout

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
