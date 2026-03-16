// Guess the Number Game (Do...While Loop)

const prompt = require("prompt-sync")(); // Import the prompt module

const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

// do while loop
do {
  guess = prompt("Guess the Numbers( 1-10 ) : ");
} while (guess != correctNumber);

console.log("Congratulations! You guessed the correct number:", correctNumber);
