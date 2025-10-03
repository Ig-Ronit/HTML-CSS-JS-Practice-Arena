let arr = [10, 20, 30, 40, 50, 60, 70, 80, 50];

let search = 50;
let lastIndexOf; // index 8

for (let i = arr.length - 1; i > 0; i--) {
  if (arr[i] === search) {
    console.log(`Found number at index`, i);
    lastIndexOf = i;
    break;
  } else {
    // console.log("checking number:", arr[i]);
  }
}

let arr2 = [98, 78, 65, 89, 34, 12, 43];
let search2 = 65; // index 2
let lastIndexOf2;

for (let i = arr2.length - 1; i > 0; i--) {
  if (arr2[i] === search2) {
    console.log(`Found number at index`, i);
    lastIndexOf2 = i;
    break;
  } else {
    // console.log("checking number:", arr2[i]);
  }
}

let arr3 = [98, 78, 65, 85, 34, 11, 40];
let search3 = 34; // index 2
let lastIndexOf3;

for (let i = arr3.length - 1; i > 0; i--) {
  if (arr3[i] === search3) {
    console.log(`Found number at index`, i);
    lastIndexOf3 = i;
    break;
  } else {
    // console.log("checking number:", arr3[i]);
  }
}
