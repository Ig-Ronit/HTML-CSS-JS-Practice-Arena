let studentInfo = {
  name: "Arav",
  age: 20,
  city: "Mumbai",
  pincode: 100123,
  isOptForMedical: false,
  hobbies: ["Cricket", "Football"],
  isVerified: null,
  address: {
    houseNum: 101,
    street: "Main Street",
  },
};
studentInfo.address.street;

// // from server - from client => JSON =>string

// // object which creates in JS => javascript object

let JSONFromLocal = {
  name: "Arav",
  age: 12,
};

// // //parse  // stringfy

let JSONStringfy = JSON.stringify(JSONFromLocal);
console.log(JSONStringfy);

let JSONParse = JSON.parse(JSONStringfy);
console.log("JSONParse", JSONParse);

// // READ Data
console.log(studentInfo);
console.log(studentInfo.name);
console.log(studentInfo["name"]);
console.log(studentInfo.address);
console.log(studentInfo["address"]);

// // CREATE property

studentInfo.email = "arav@ggmail.com";
studentInfo["gender"] = "male";

console.log(studentInfo);

// //UPDATE property

studentInfo.city = "Delhi";
studentInfo["age"] = 21;

console.log(studentInfo);

// // DELETE

delete studentInfo.pincode;
delete studentInfo["hobbies"];
console.log(studentInfo);

// OBJECT Destructuring

let studentInfoEx2 = {
  name: "Arav",
  age: 20,
  city: "Mumbai",
  pincode: 100123,
  gender: "male",
  isOptForMedical: false,
  hobbies: ["Cricket", "Football"],
  isVerified: null,
  address: {
    houseNum: 101,
    street: "Main Street",
  },
};

// without destructuring
console.log(studentInfoEx2.city);

const name = studentInfoEx2.name;
const age = studentInfoEx2.age;
const city = studentInfoEx2.city;
const pincode = studentInfoEx2.pincode;

// destructuring
// const { name, age, city, pincode } = studentInfo;

const {
  address: { street },
} = studentInfo;

console.log(street);

// // destructuring // rename
const { city: studentCity } = studentInfo;

// console.log(Name);
// console.log(city);

// console.log("Destructing:", studentCity);

// const { name, gender = null } = studentInfo;
// console.log("name", name);
// console.log("gender", gender);

// optional chaining

// single line comment

/*
this is my first
javascript lecture
and I am going to be MERN stack developer in next 6 months
*/

// to explain what the functionality doing
// to comment the code which is not usable
// general comment

// console.log("hello there");

// optional chaining

const user = {
  name: "Anil",
  address: {
    city: "Pune",
  },
};

// ?.

console.log("line 1", user.address.city);
console.log(user.contact); // undefined

console.log("line 2", user?.contact?.mobileNum); // no error // undefined

console.log("line 3", user.contact.mobileNum); // error

// ??
// 0,"", false
