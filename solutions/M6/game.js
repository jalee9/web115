// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Track the number of guesses
let attempts = 0;

// Prompt the user for their first guess
let userGuess = Number(prompt("Guess a number between 1 and 10. Enter 999 to quit."));

// Keep prompting until the guess is correct or user exits
while (userGuess !== randomNumber) {
  // Exit the game if user types 999
  if (userGuess === 999) {,
    alert("Game exited. Thanks for playing!");
    break;
  }

  // Check for invalid input (non-numeric or out of range)
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    userGuess = Number(prompt("Please enter a valid number between 1 and 10:"));
    continue; // skip the rest of the loop and prompt again
  }

  // Increment attempts on valid guesses
  attempts++;

  // Give feedback
  if (userGuess > randomNumber) {
    userGuess = Number(prompt("Too high! Guess again:"));
  } else if (userGuess < randomNumber) {
    userGuess = Number(prompt("Too low! Guess again:"));
  }
}

// If user guessed correctly (not exited), show success message
if (userGuess === randomNumber) {
  attempts++; // Count the final correct guess
  alert(`Congratulations, you've guessed it in ${attempts} tries!`);
}
// End of the game