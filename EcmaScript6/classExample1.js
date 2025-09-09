const firstName = 'abc'
class Student {
  firstName = '';
  lastName = '';
  pcmTotal = 0;

  constructor(std) {
    this.firstName = this.getFirstName(std.name);
    this.lastName = this.getLastName(std.name);
    this.pcmTotal = std.physics + std.maths + std.chemistry
  }

  getFirstName(name) {
    return name.split(' ')[0]
  }

  getLastName(name) {
    return name.split(' ')[1]
  }
}

const s1Details = {
  name: 'virat kohli',
  standard: '10th',
  physics: 80,
  maths: 70,
  chemistry: 60
}

const s2Details = {
  name: 'sachin tenduldar',
  standard: '12th',
  physics: 90,
  maths: 90,
  chemistry: 90
}

const s1 = new Student(s1Details)
const s2 = new Student(s2Details)

console.log(s1)
console.log(s2)
