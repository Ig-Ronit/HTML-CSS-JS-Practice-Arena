//create new object
const person = new Object();

person.name = "Karn";
person.city = "Delhi";
person.age = 40;

console.log(person);

const toyato = {
  name: "Fortuner",
  price: "50 Lakhs",
};

// const name = toyato.name;
// const price = toyato.price;
const { name, price } = toyato;

console.log("car name", name);

const toyatoIndia = Object.create(toyato);

console.log("toyatoIndia", toyatoIndia);
console.log(toyatoIndia.__proto__.name);

Object.assign(person, {});
console.log("person", person);