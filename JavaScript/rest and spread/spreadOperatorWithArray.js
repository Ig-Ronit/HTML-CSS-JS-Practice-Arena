// for array expansion
const numbers = [1, 2, 3, 4];
console.log(...numbers);

// combine array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("combined array", combined);

// copy array (shallow copy)
const original = [100, 200, 300];
const copy = [...original];
copy.push(10);
console.log("original", original);
console.log("copy", copy);