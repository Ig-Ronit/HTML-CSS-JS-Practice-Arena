function getUser(getOrdersCallbackFunc) {
  setTimeout(() => {
    console.log("API call 1 ✅ User data fetched");
    getOrdersCallbackFunc({ status: true, id: 1261276, name: "Arjun" });
  }, 3000);
}

function getOrders(userData, orderDetailsCallbackFunc) {
  setTimeout(() => {
    console.log(
      "API call 2 ✅ Orders details fetched successfully for user:",
      userData.name
    );
    orderDetailsCallbackFunc({
      userId: 1261276,
      orders: ["Laptop", "Mobile", "Books"], // Laption, Mobile, Books
    });
  }, 3000);
}

function showOrderDetails(orderData) {
  setTimeout(() => {
    console.log(`API call 3 ✅ showing orders ${orderData.orders.join(", ")}`);
  }, 3000);
}

// callback hell  // paramid of doom
// very difficult to manager the code

// promise chaining

getUser((user) => {
  getOrders(user, (orderData) => {
    showOrderDetails(orderData);
  });
});
