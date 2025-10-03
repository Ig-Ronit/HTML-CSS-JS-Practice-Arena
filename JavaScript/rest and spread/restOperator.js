// usage
// 1. with function parameters

function sum(...numbers) {
  return numbers.reduce((acc, currentNumber) => {
    acc = acc + currentNumber;
    return acc;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 2. array destructuring
const names = ["Karn", "Arjun", "Bhim", "Krishna", "Bhishma"];

const [first, second, third, ...others] = names;
console.log("first", first);
console.log("second", second);
console.log("third", third);
console.log("others", others);

const user = {
  id: 1,
  name: "Karn",
  age: 40,
  city: "Pune",
};

//object destructuring
const { id, ...details } = user;
console.log("id", id);
console.log("details", details);