class Animal {
  constructor(_name) {
    this.name = _name;
  }

  setName(_name) {
    this.name = _name;
  }
  getName() {
    return this.name;
  }
}

const dog = new Animal("Moti");

dog.setName("Dogesh");

// const tiger = new Animal();
// tiger.setName("Shera");

console.log(dog.getName());
// console.log(tiger.getName());