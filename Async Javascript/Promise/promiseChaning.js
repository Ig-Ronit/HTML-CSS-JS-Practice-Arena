// 3 API call

// 1. addToCart =>
// 2. placeOrder =>
// 3. makePayment

function addToCart(product) {
  return new Promise((resolve, reject) => {
    console.log("Adding product to cart...");
    setTimeout(() => {
      if (product) {
        resolve({
          cartId: 101,
          product,
        });
      } else {
        reject("No product to add...");
      }
    }, 3000);
  });
}

function placeOrder(cart) {
  return new Promise((resolve, reject) => {
    console.log("Placing order.....");
    setTimeout(() => {
      if (cart && cart.cartId) {
        resolve({
          orderId: 17267,
          product: cart.product,
        });
      } else {
        reject("Cart is empty or cart is not found");
      }
    }, 3000);
  });
}

function makePayment(order) {
  return new Promise((resolve, reject) => {
    console.log("Making Payment.....", order);
    setTimeout(() => {
      if (order && order.orderId) {
        resolve("Payment successfully done for:" + order.orderId);
      } else {
        reject("payment failed as could not find order");
      }
    }, 3000);
  });
}

addToCart("laptop")
  .then((cart) => {
    console.log("cart", cart);
    return placeOrder(cart);
  })
  // DO NOT USE LIKE THIS
  //   .catch((err) => {
  //     console.log("facing problem to addToCart", err);
  //   })
  .then((order) => {
    console.log("order", order);
    return makePayment(order);
  })
  //   .catch((err) => {
  //     console.log("facing problem to order", err);
  //   })
  .then((paymentResult) => {
    console.log("paymentResult", paymentResult);
  })
  .catch((err) => {
    console.log("facing problem:", err);
  });