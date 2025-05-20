
# M5 Assignment – Simple Sentence Generator

## 📘 Overview

This assignment introduces students to the foundational concepts of **arrays** and **loops** in JavaScript. By creating a simple sentence generator, students will practice iterating through an array and building a full sentence dynamically.

---

## 🧩 Key Concepts Covered

- Declaring and initializing arrays
- Looping through array elements using a `for` loop
- String concatenation
- Outputting results with `innerHTML`
- Attaching an event listener to an HTML button

---

## ✅ How the Code Works

### 1. The Array
```javascript
const words = ["I", "like", "to", "code"];
```
This array contains four strings that make up the sentence. Students can replace these with any words to customize the output.

---

### 2. The `generateSentence()` Function

This function:
- Initializes an empty `sentence` variable
- Uses a `for` loop to iterate over the array
- Concatenates each word followed by a space
- Uses `.trim()` to remove the trailing space before displaying it
- Outputs the final sentence to the `<p id="output"></p>` element

---

### 3. Event Listener

```javascript
document.getElementById("generateBtn").addEventListener("click", generateSentence);
```

This line sets up the connection between the HTML button and the function. When clicked, the `generateSentence()` function is triggered, and the sentence appears on the page.

---

## 🔍 Tips for Exploration

Encourage students to try the following:
- 🔄 Add more words to the array and regenerate the sentence
- 🤔 What happens if the array is empty? Add a condition to handle it!
- ✨ Use `toUpperCase()` or `toLowerCase()` to modify the sentence's appearance
- 🧪 Change the loop to a `while` loop as a challenge

---

## 💡 Why This Matters

Understanding arrays and loops is critical in programming. They allow us to **store and process data efficiently**. This exercise shows how even a small set of instructions can dynamically generate meaningful output—a foundational idea in all web applications.
