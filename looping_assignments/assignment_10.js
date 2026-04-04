// Guess the Number Game (Do...While Loop)
const prompt = require("prompt-sync")();

// Using camelCase for multi-word variables
const correctNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;

do {
  // Convert the input string to an actual number
  userGuess = Number(prompt("Guess the number (1-10): "));

  if (userGuess !== correctNumber) {
    console.log("Wrong! Try again.");
  }
} while (userGuess !== correctNumber);

console.log("Congratulations! You guessed the correct number:", correctNumber);
