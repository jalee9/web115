# Instructor Notes: M4 Functions and Event Handlers Assignment

## 📘 Overview

In this module, students build a simple interactive webpage that generates a **personalized Happy Birthday song** based on user input. This assignment reinforces the use of **JavaScript functions**, **event listeners**, and **DOM manipulation**.

When a user enters their name and age and clicks "Generate Song," JavaScript builds and displays a custom birthday message using information from the form fields.

---

## 🧩 Key Concepts Covered

- **Function declaration** and calling custom functions  
- **Receiving arguments** from user input  
- **Using `innerHTML`** to update content on a webpage  
- **DOM manipulation** with `getElementById()`  
- **Event handling** using `addEventListener()`

---

## ✅ What the Code Does

### 1. `happyBirthday()`
This function adds the line `"Happy Birthday to you!"` to the `#output` paragraph each time it's called.

### 2. `birthdayName(name)`
Takes one argument (`name`) and adds the line:  
`"Happy Birthday dear [name],"`  
It demonstrates how we pass a parameter into a function and use string interpolation with template literals.

### 3. `personalizedSong(age, name)`
Takes two arguments (`age` and `name`) and builds the full birthday message:
- First prints `"You're [age] years old today!"`
- Then calls:
  - `happyBirthday()` twice  
  - `birthdayName(name)`  
  - `happyBirthday()` one more time  

This shows how to **compose** a program by calling other functions inside a larger function.

### 4. Event Listener on Button
When the "Generate Song" button is clicked:
- It clears any existing content in `#output`
- Retrieves values from the name and age input fields
- Calls `personalizedSong()` with those values

This illustrates how to **connect JavaScript to user actions** on the page.

---

## 🔍 How to Explore Further

Try the following enhancements:
- 🎶 Add emojis or musical notes to each line of the song  
- 📅 Add a "birthday month" field and include it in the output  
- 🧪 Use `if` statements to give different messages based on age (e.g., "You're a teenager!")  
- 🎂 Add a reset button to clear the fields and output  

---

## 💡 Why This Matters

By breaking the birthday greeting into smaller pieces, students begin to understand **modular thinking**, an essential skill in programming. Each function has a single job, making the code easier to test, debug, and reuse. Learning how to attach behavior to events (like a button click) is foundational for building interactive websites and apps.
This assignment sets the stage for more complex projects, where students will learn about **APIs**, **frameworks**, and **state management** in future modules.
