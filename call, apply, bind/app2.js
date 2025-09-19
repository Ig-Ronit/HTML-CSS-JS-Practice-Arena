const person = {
  name: "Karn",
  country: "India",
};

const details = function (age, city) {
  console.log(
    this.name +
      " from " +
      this.country +
      " and my age is " +
      age +
      " and I am stay in " +
      city
  );
};

const user = {
  name: "Arjun",
  country: "India",
};

const bindFun = details.bind(person, "100", "New Mumbai");
console.log("bindFun", bindFun);
details.call(person, "40", "New Delhi");
details.apply(person, ["40", "New Delhi"]);

details.call(user, "50", "Delhi");
details.apply(user, ["50", "Delhi"]);
bindFun();