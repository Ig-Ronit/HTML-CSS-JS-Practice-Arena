function addToCart(product) {
  return new Promise((resolve, reject) => {
    console.log(`Adding ${product} to cart...`);
    setTimeout(() => {
      product ? resolve({ cartId: 1, product }) : reject("No product to add");
    }, 1000);
  });
}

function makePayment(cart) {
  return new Promise((resolve) => {
    console.log("Processing payment...");
    setTimeout(() => resolve({ orderId: 5001, status: "Paid", product: cart.product }), 1000);
  });
}

function showOrderConfirmation(order) {
  return new Promise((resolve) => {
    console.log("Confirming order...");
    setTimeout(() => resolve(`Order ${order.orderId} for ${order.product} confirmed!`), 1000);
  });
}

// Usage
addToCart("T-Shirt")
  .then((cart) => makePayment(cart))
  .then((order) => showOrderConfirmation(order))
  .then((message) => console.log(message))
  .catch((err) => console.log("Error:", err));
