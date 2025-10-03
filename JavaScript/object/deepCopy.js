const originalObj = {
  name: "Karn",
  age: 40,
  address: {
    street: "Main Street",
    city: "Delhi",
  },
  // greet: function () {
  //   console.log("hello there");
  // },
  date: new Date("1990-01-01"),
  birthPlace: undefined,
};

// 1st way: using structuredClone method
// const copiedObj = structuredClone(originalObj);

// 2nd way: using json.stringfy and json.parse
const copiedObj = JSON.parse(JSON.stringify(originalObj));

// use third party libraries

// originalObj.greet();
// copiedObj.greet();

console.log("originalObj", originalObj);
console.log("copiedObj", copiedObj);
copiedObj.name = "Arjun";
copiedObj.address.street = "Local Street";

console.log("after update:");
console.log("originalObj", originalObj);
console.log("copiedObj", copiedObj);