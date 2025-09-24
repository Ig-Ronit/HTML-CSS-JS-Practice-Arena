// 1. Object Expansion
// merge object
const user = {
  name: "Karn",
  age: 40,
};

const details = {
  city: "Pune",
  country: "India",
  age: 50,
};

const mergedObj = { ...user, ...details };
console.log("mergedObj", mergedObj);

// copy object // shallow copy
const copiedFromMergedObj = { ...mergedObj };
console.log("copiedFromMergedObj", copiedFromMergedObj);