
// sync
const custumPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    setTimeout(() => {
      resolve("Task completed successfully");
    }, 5000);
  } else {
    reject("Task failed");
  }
});

const result = custumPromise;
console.log("result", result);

result
  .then((data) => {
    // to handle completion of task/ fullfilled
    console.log("Fullfiled Promise:", data);
  })
  .catch((error) => {
    // to handle the rejection of promise
    console.log("error:", error);
  });

// .then => fullfilled / resolved
// .catch => rejected /  reject
