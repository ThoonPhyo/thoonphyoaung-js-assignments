let username = "John Doe";
console.log(username, typeof username); // John Doe string

let city = "New York";
console.log(username + " lives in " + city); // John Doe lives in New York


//template literals (es6 version)
console.log(`${username} lives in ${city}`); // John Doe lives in New York                


// concatenation(in burmese = ပေါင်းစပ်ခြင်း)
let str1 = "Su Su";
let str2 = "is beautiful";
console.log(str1 + " " + str2); // Su Su is beautiful

console.log("He is 5'6\" tall"); // He is 5'6" tall(escape character = \ for double quote)
console.log('He is 5\'6" tall'); // escape character = \ for single quote

let product = "Laptop";
let price = 1200;

// The price of Laptop is 1200
console.log(`The price of ${product} is ${price}`); 

let employee = "Michael";
let position = "Developer";

// Michel works as a Developer
console.log(`${employee} works as a ${position}`);