class Student {
  constructor(name, grade) {
    this.name = name;
    this._grade = grade;
  }

  get grade() {
    return `${this.name} scored ${this._grade}`;
  }

  set grade(newGrade) {
    this._grade = newGrade;
  }
}

const s1 = new Student("Alice", 90);
console.log(s1.grade);
s1.grade = 100;
console.log(s1.grade);