console.log(1);

console.log(2);

setTimeout(() => {
  console.log(3);
}, 0);

setTimeout(() => {
  console.log(4);
}, 100);

setTimeout(() => {
  console.log(5);
}, 0);

new Promise((resolve) => {
  console.log(6);

  resolve();
});

new Promise((resolve) => {
  setTimeout(() => {
    console.log(7);
    resolve();
  }, 0);
});

new Promise((resolve) => {
  setTimeout(() => {
    console.log(8);
    resolve();
  }, 100);
});

console.log(9);

// Expected output: 1, 2, 6, 9, 3, 5, 7, 4, 8