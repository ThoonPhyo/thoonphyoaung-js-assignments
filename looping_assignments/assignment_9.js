// Password Validation (While Loop)

const prompt = require("prompt-sync")(); // Import the prompt module

let password = "";
let isValid = false;

while (!isValid) {
  password = prompt("Enter a password (must be at least 8 characters): ");

  if (password.length >= 8) {
    isValid = true;
  } else {
    console.log("Password is too short. Try again.");
  }
}

if (isValid) {
  console.log("Password is valid!");
}
