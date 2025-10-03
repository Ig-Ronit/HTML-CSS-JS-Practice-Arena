const employees = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    department: "HR",
    salary: 50000,
    experience: 4,
  },
  {
    id: 2,
    name: "Bob",
    age: 45,
    department: "IT",
    salary: 75000,
    experience: 10,
  },
  {
    id: 3,
    name: "Charlie",
    age: 25,
    department: "Sales",
    salary: 40000,
    experience: 2,
  },
  {
    id: 4,
    name: "David",
    age: 35,
    department: "IT",
    salary: 80000,
    experience: 7,
  },
  {
    id: 5,
    name: "Eva",
    age: 29,
    department: "HR",
    salary: 55000,
    experience: 3,
  },
  {
    id: 6,
    name: "Frank",
    age: 50,
    department: "Finance",
    salary: 90000,
    experience: 20,
  },
  {
    id: 7,
    name: "Grace",
    age: 32,
    department: "Sales",
    salary: 47000,
    experience: 5,
  },
  {
    id: 8,
    name: "Henry",
    age: 28,
    department: "IT",
    salary: 67000,
    experience: 4,
  },
  {
    id: 9,
    name: "Ivy",
    age: 40,
    department: "Finance",
    salary: 72000,
    experience: 8,
  },
  {
    id: 10,
    name: "Jack",
    age: 38,
    department: "HR",
    salary: 60000,
    experience: 6,
  },
];

// count the employee from HR department(show it)

let hrCount = 0,
  hrArray = [];
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "HR") {
    hrCount++;
    hrArray.push(employees[i]);
  }
}
console.log("hrCount", hrCount);
console.log("hrArray", hrArray);

// find avg salary of employees who have 5 or more than 5 exp

let expSalaryTotalSum = 0;
let expCount = 0;

for (let i = 0; i < employees.length; i++) {
  if (employees[i].experience >= 5) {
    expSalaryTotalSum = expSalaryTotalSum + employees[i].salary;
    expCount++;
  }
}

let averageSalary = expSalaryTotalSum / expCount;
console.log("averageSalary", averageSalary);
