class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`${this.type} is moving.....`);
  }
}

class Car extends Vehicle {
  constructor(brand, color) {
    super("Car");
    this.brand = brand;
    this.color = color;
  }
  move() {
    // call to current child mothod
    super.move(); // call to parent object and function
    console.log(`${this.brand} in ${this.color} color is driving on road`);
  }
}

const car1 = new Car("Tata", "Black");
console.log("car1", car1);
car1.move();