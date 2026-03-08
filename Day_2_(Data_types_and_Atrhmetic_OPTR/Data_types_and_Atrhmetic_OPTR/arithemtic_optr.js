// [+,-,*,/,%]

let x = 12;
let y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);


let milk = 30.2;
let apple = 10.5;
let bread = 10.3; 
let discount_rate = 0.1; //10% discount
let total = milk + apple + bread;

console.log("Total = " + total);


// discount amount
let discount_amount = (total * discount_rate).toFixed(2);
console.log(discount_amount);

// net amount
let net_total = total - discount_amount;
console.log(net_total);


