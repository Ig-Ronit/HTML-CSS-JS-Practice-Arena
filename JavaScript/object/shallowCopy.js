const originalObj = {
  name: "Karn",
  age: 40,
  address: {
    street: "Main Street",
    city: "Delhi",
  },
};
// 1st way using Object.assign
// const copiedObj = Object.assign({}, originalObj);

// 2nd way using spres operator
const copiedObj = { ...originalObj };

console.log("originalObj", originalObj);
console.log("copiedObj", copiedObj);
copiedObj.name = "Arjun";
copiedObj.address.street = "Local Street";

console.log("after update:");
console.log("originalObj", originalObj);
console.log("copiedObj", copiedObj);