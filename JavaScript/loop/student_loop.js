let students = [
  { id: 1, name: "Anil", age: 21, marks: 72, subject: "Math", grade: "B" },
  { id: 2, name: "Sneha", age: 20, marks: 88, subject: "English", grade: "A" },
  { id: 3, name: "Ravi", age: 22, marks: 33, subject: "Science", grade: "D" },
  { id: 4, name: "Pooja", age: 21, marks: 91, subject: "Math", grade: "A+" },
  { id: 5, name: "Sachin", age: 20, marks: 27, subject: "History", grade: "F" },
  { id: 6, name: "Meena", age: 23, marks: 64, subject: "English", grade: "C" },
  { id: 7, name: "Ajay", age: 21, marks: 80, subject: "Science", grade: "B+" },
  { id: 8, name: "Kavita", age: 22, marks: 55, subject: "History", grade: "C" },
  { id: 9, name: "Nikhil", age: 23, marks: 49, subject: "Math", grade: "C-" },
  {
    id: 10,
    name: "Bhavna",
    age: 20,
    marks: 76,
    subject: "English",
    grade: "B+",
  },
];
// console.log("length of arr of students", students.length);

// 1. print name and age of each students
for (let i = 0; i < students.length; i++) {
  console.log("name:", students[i].name, ", age: ", students[i].age);
}

// find the average marks of students

let total = 0,
  average;

for (let i = 0; i < students.length; i++) {
  total += students[i].marks;
}

average = total / students.length;
console.log("Total:", total);
console.log("average:", average);

// 3. count and show how many student passed(mark >=35)
let passCount = 0;
let passedStudent = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].marks >= 35) {
    passCount++;
    passedStudent.push(students[i]);
  }
}

console.log("passed Count", passCount);
console.log("passed students", passedStudent);

// highest and lowest score from the students

let highest = students[0];
let lowest = students[0];

for (let i = 0; i < students.length; i++) {
  if (students[i].marks > highest.marks) {
    highest = students[i];
  }
  if (students[i].marks < lowest.marks) {
    lowest = students[i];
  }
}

console.log("highest", highest);
console.log("lowest", lowest);
