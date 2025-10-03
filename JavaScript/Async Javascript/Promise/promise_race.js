const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 Promise result");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 Promise result");
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 Promise result");
  }, 3000);
});

Promise.race([p1, p2, p3])
  .then((result) => {
    console.log("race result:-", result);
  })
  .catch((err) => {
    console.log("err:-", err);
  });