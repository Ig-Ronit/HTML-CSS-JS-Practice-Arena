const person = {
  name: "Karn",
  country: "India",
  details: function (age, city) {
    console.log(
      this.name +
        " from " +
        this.country +
        " and my age is " +
        age +
        "and I am stay in " +
        city
    );
  },
};

const user = {
  name: "Arjun",
  country: "India",
};

person.details();
person.details.call(user, "50", "Delhi");
person.details.apply(user, ["50", "Delhi"]);