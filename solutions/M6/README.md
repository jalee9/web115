# 🎯 High/Low Guessing Game – Module 6 (WEB 115)

This project is a simple browser-based guessing game created as part of the Module 6 assignment for WEB 115 at Wake Technical Community College.

## 🧩 How It Works

- The computer picks a **random number between 1 and 10**.
- The player clicks the **Start Game** button to begin.
- The player is prompted to guess the number.
- The game provides feedback:
  - "Too high!" or "Too low!"
  - If the player types `999`, the game exits early.
- When guessed correctly, the game shows how many attempts it took.

## 🚀 Features

- External JavaScript file (`game.js`)
- `prompt()`-based user input
- Uses `alert()` for feedback and results
- Tracks number of attempts
- User-controlled start via button (avoids popup blockers)

## 📂 File Structure

- `index.html` – Main game interface and structure
- `game.js` – External JavaScript file containing all game logic
- `README.md` – Project overview and documentation

## 📌 How to Play

1. Open `index.html` in your browser (or view it via GitHub Pages).
2. Click the **Start Game** button.
3. Enter your guesses in the prompt popup.
4. Get hints if your guess is too high or low.
5. Type `999` to exit early, or keep guessing until you win!

## ✅ Assignment Requirements Met

- [x] Random number generation between 1–10
- [x] Prompt to take user input
- [x] Conditionals to compare guess to the target number
- [x] Loop for multiple guesses
- [x] Special case for exiting with `999`
- [x] Invalid input handling
- [x] Count and display number of attempts
- [x] External `.js` file and working deployment

## 📝 Instructor Info

Created for **WEB 115: Introduction to JavaScript**  
Instructor: **Professor Jennifer Lee**  
Wake Technical Community College 

