// Grocery Shopping Budget

// items and prices
let bread = 2.5;
let milk = 3.0;
let eggs = 2.0;
let cheese = 4.5;
let apples = 5.0;
let chicken = 8.0;
let rice = 3.5;
let butter = 2.75;
let juice = 3.25;

// total cost
let total_cost =
  bread + milk + eggs + cheese + apples + chicken + rice + butter + juice;
console.log("Total Cost : " + total_cost);

// discount(10%)
let discount_rate = 0.1;
let discount_amount = total_cost * discount_rate;
console.log("Discount_amount : " + discount_amount.toFixed(2));

// total cost after discount(10%)
total_cost = total_cost - discount_amount;

// tax(7%)
let tax_rate = 0.07;
let tax_amount = total_cost * tax_rate;
console.log("Tax_amount : " + tax_amount.toFixed(2));

// final cost
let final_cost = total_cost + tax_amount;
console.log("Final Cost : " + final_cost.toFixed(2));
