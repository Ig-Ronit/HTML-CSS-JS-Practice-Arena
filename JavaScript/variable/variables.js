//global scope => hoisting, scope
//block scope

{
  // block
  let firstName = "Anil";
  firstName = "Abhimanyu"; // reassign

  console.log("name", firstName);

  const PI = 3.14;
  //   PI = 10;
  console.log("PI", PI);

  var sampleData = "Hey there";
}

// console.log("outside of scopt", firstName);

console.log("sampleData", sampleData);

let lastName;
// undefine => js(by Default)
console.log("lastName:", lastName);

let college = null;
console.log("college", college);

// string, number, boolean, , undefined, null, array, object

// student 1 =====> 10  => array
// let studentName = "Arjun";
// let standard = "5th";
// let grade = "A";
// let rollNum = 18;

// object  => key: value

let student = {
  //100
  name: "Arjun",
  standard: "5th",
  grade: "A",
  rollNum: 18,
  address: {
    houseNum: 101,
    street: "Main Street",
    city: "Delhi",
  },
};
console.log(student);
// stringfy
// let strObj = JSON.stringify(student, null, 2);
// console.log("strObj", strObj);

// read

console.log("student.grade", student.grade); //using .
console.log("student[rollNum]", student["rollNum"]); //using []

// update
student.grade = "A+";
student["rollNum"] = 19;
console.log(student);

// create

student.sirName = "Mehta";

// delete

delete student.grade;
console.log("student", student);

// older way
// let studName = student.name;
// let address = student.address;
// let rollNum = student.rollNum;

// destructuring

let { name, address, rollNum } = student;

console.log("address, rollNum", name, address, rollNum);

console.log("address", address);
console.log("rollNum", rollNum);

let student2 = {
  name: "Amar",
  standard: "5th",
  grade: "A",
  rollNum: 25,
};
// address => undefined

console.log("\n\n\n\n\n\n");
console.log("student city", student.address.city);
console.log("student-2 city", student2?.address?.city); // error  // undefined

console.log("hey there");
console.log("have a good day");
// 100
