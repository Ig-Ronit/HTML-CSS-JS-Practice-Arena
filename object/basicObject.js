const person = {
  name: "Karn",
  age: 40,
  city: "Delhi",
};

console.log(person.name);
console.log(person["age"]);

person.city = "Mumbai";
console.log(person.city);

person["country"] = "India";

delete person.age;
console.log(person);

for (let key in person) {
  console.log(key + " : " + person[key]);
}