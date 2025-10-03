const originalObj = {
  name: "Karn",
  age: 40,
  address: "Delhi",
};

const copiedObj = originalObj;
console.log("originalObj", originalObj);
console.log("copiedObj", copiedObj);

copiedObj.name = "Arjun";

console.log("after update:");
console.log("originalObj", originalObj);
console.log("copiedObj", copiedObj);