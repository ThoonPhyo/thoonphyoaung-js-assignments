// Shopping cart total

// items list
const cart = [
  { item: "Laptop", price: 1200 },
  { item: "Headphones", price: 100 },
  { item: "Mouse", price: 50 },
  { item: "Keyboard", price: 75 },
];

// Total cost (Changed from total_cost to totalCost)
let totalCost = 0;

// Looping
for (let i = 0; i < cart.length; i++) {
  totalCost += cart[i].price;
}

// Display the result
console.log("Total cost: " + totalCost);
