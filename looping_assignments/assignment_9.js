// Password Validation (While Loop)
const prompt = require("prompt-sync")();

let userPassword = ""; // Renamed from 'password' to be more descriptive
let isPasswordValid = false; // Using camelCase

while (!isPasswordValid) {
  userPassword = prompt("Enter a password (must be at least 8 characters): ");

  if (userPassword.length >= 8) {
    isPasswordValid = true;
  } else {
    console.log("Password is too short. Try again.");
  }
}

console.log("Password is valid!");
