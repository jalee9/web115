function startGame() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  let userGuess = Number(prompt("Guess a number between 1 and 10. Enter 999 to quit."));

  while (userGuess !== randomNumber) {
    // Allow user to exit
    if (userGuess === 999) {
      alert("Game exited. Thanks for playing!");
      return;
    }

    // Handle invalid input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      userGuess = Number(prompt("Please enter a valid number between 1 and 10:"));
      continue;
    }

    attempts++;

    // Provide hints
    if (userGuess > randomNumber) {
      userGuess = Number(prompt("Too high! Guess again:"));
    } else if (userGuess < randomNumber) {
      userGuess = Number(prompt("Too low! Guess again:"));
    }
  }

  // Final correct guess
  attempts++;
  alert(`Congratulations, you've guessed it in ${attempts} tries!`);
}
// end of game
