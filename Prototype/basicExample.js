// names is type of array
Array.prototype.toUpperCase = function () {
  return this.map((currentElement) => {
    return currentElement.toUpperCase();
  });
};

Array.prototype.sum = function () {
  return this.reduce((acc, currentElement) => {
    return acc + currentElement;
  }, 0);
};

const names = ["Karn", "Arjun", "Bhim"];

console.log(names.sort());
console.log(names.toUpperCase());
// names = names.flat();
console.log(Array.prototype);

let numbers = [10, 20, 30, 40];
console.log(numbers.sum());