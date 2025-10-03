function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Logging in...");
    setTimeout(() => {
      if (username === "ronit" && password === "1234") {
        resolve({ userId: 101, username: "ronit" });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

function getUserProfile(userId) {
  return new Promise((resolve) => {
    console.log("Fetching profile...");
    setTimeout(() => {
      resolve({ userId, name: "Ronit Kene", age: 23 });
    }, 1000);
  });
}

// Usage
loginUser("ronit", "1234")
  .then((user) => getUserProfile(user.userId))
  .then((profile) => console.log("Profile:", profile))
  .catch((err) => console.log("Error:", err));
