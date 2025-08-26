function greetUser(name, callback) {
  console.log("Hi ", name);
  callback();
}

function sayGoodBye() {
  console.log("Goodbye!!");
}

greetUser("Arjun", sayGoodBye);

// setTimeout

setTimeout(() => {
  console.log("Making HTTP call, here is User Data"); // http call
}, 5000);
