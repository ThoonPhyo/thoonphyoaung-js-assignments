// Resturant Bill Calculator

// persons
let persons = 3;

// items and bills
let burger = 8.5;
let fries = 3.25;
let soda = 2.0;
let dessert = 5.75;

// total bill
let total_bill = burger + fries + soda + dessert;
console.log("Total bills : " + total_bill);

// services charge( 10% )
let service_charge = 0.1;
let service_charge_amount = total_bill * service_charge;
console.log("Service Charge : " + service_charge_amount.toFixed(2));

// total bill after service charge
total_bill = total_bill + service_charge_amount;

// tax ( 7% )
let tax = 0.07;
let tax_amount = total_bill * tax;
console.log("Tax Amount : " + tax_amount.toFixed(2));

// final total bill
let final_total_bill = total_bill + tax_amount;
console.log(
  `For ${persons} persons, the total bill including tax is ${final_total_bill.toFixed(2)}`,
);

// spilt bill for each person
let spilt_bill = final_total_bill / persons;
console.log(`The amount for each person is ${spilt_bill.toFixed(2)}`);
