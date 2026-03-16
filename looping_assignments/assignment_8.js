// Shopping cart total

// items' list
const cart = [
  { item: "Laptop", price: 1200 },
  { item: "Headphones", price: 100 },
  { item: "Mouse", price: 50 },
  { item: "Keyboard", price: 75 },
];

// total cost
let total_cost = 0;

// looping
for (let i = 0; i < cart.length; i++) {
  total_cost += cart[i].price;
}

// Display the result
console.log("Total cost: " + total_cost);
