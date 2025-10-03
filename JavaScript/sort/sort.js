let a = [5, 3, 1, 6, 10, 1, 2, 177, 12];
// bubble sort

// i = 3;
// j = 5;
// temp = 5;

function sort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        // swapping
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sort(a));
