// Product Availability Check

// product info
let product_stock = 0;
let buy_product = 11;

// checking
if (buy_product <= product_stock) {
  console.log("! The order can be fulfilled");
} else if (buy_product > product_stock && product_stock != 0) {
  console.log("Sorry, Insufficient stock!");
} else {
  console.log("Sorry, Out of Stock!");
}
