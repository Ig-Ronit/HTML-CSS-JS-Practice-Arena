class Car {
  constructor(_brand, _color) {
    this.brand = _brand;
    this.color = _color;
  }

  start() {
    console.log(`${this.brand} in ${this.color} color is starting...`);
  }
}

const c1 = new Car("Toyato", "Red");
const c2 = new Car("Honda", "Black");

console.log(c1.brand);
c1.start();