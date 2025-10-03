const p1 = Promise.resolve("P1");
const p2 = Promise.resolve("P2");
const p3 = Promise.resolve("P3");

// Promise.all([p1, p2, p3])
//   .then((result) => {
//     console.log("promise.all result", result);
//   })
//   .catch((err) => {
//     console.log("some promises might be rejected:", err);
//   });

// eg2

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pr1 result");
  }, 1000);
});

const pr2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("pr2 result");
  }, 5000);
});

const pr3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("pr3 result");
  }, 2000);
});

Promise.all([pr1, pr2, pr3])
  .then((result) => {
    console.log("promise.all result", result);
  })
  .catch((err) => {
    console.log("some promises might be rejected:", err);
  });