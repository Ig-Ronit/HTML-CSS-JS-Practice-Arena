// const result = a.add(5).sub(2).mul(10).getResult(); // 30

function Calculator() {
  this.calculate = 0;
}

Calculator.prototype.add = function (number) {
  this.calculate += number;
  return this;
};

Calculator.prototype.sub = function (number) {
  this.calculate -= number;
  return this;
};

Calculator.prototype.mul = function (number) {
  this.calculate *= number;
  return this;
};

Calculator.prototype.getResult = function () {
  return this.calculate;
};

const a = new Calculator();
console.log(a);
const result = a.add(5).sub(2).mul(10).getResult();
console.log(result);