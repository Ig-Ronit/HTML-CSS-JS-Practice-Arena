
function doubleArray(arr) {
  return new Promise((resolve, reject) => {
    // const arr = [1, 2, 3, 4, 5];
    let success = true;

    if (success) {
      resolve(
        arr.map((currentElement) => {
          return currentElement * 2;
        })
      );
    } else {
      reject("Cannot make double of array");
    }
  });
}

const result = doubleArray([98, 12, 127, 100]);
console.log("result", result);
result
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("handling rejection:", error);
  });
