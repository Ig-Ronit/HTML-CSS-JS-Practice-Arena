const obj1 = { a: 1 };
const obj2 = { a: 5, b: 2 };
// Object.assign(obj1, obj2);
const merged = { ...obj1, ...obj2 };

console.log(obj1);
console.log(obj2);
console.log("merged", merged);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
const mergedArr = [...arr1, ...arr2];

console.log("mergedArr", mergedArr);