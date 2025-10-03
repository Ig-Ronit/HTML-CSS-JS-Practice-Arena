const p1 = Promise.resolve("P1");
const p2 = Promise.reject("P2");
const p3 = Promise.reject("P3");

Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log("promise.all result", result);
  })
  .catch((err) => {
    console.log("some promises might be rejected:", err);
  });