
# M5 Challenge – Build a Secret Code Phrase

## 🔍 Overview

In Module 5, you used arrays and loops to construct a sentence from a list of words. In this challenge, you'll reverse that idea: take an array of **code words** and turn them into a secret message by looping through them **backwards**.

---

## ✅ Requirements

1. Create an HTML file with:
   - A button labeled “Reveal Secret”
   - A paragraph with `id="output"` where the secret message will be displayed

2. In your script:
   - Create an array called `codeWords` with at least 5 mystery words
   - Write a function `revealSecret()` that:
     - Uses a loop to reverse the order of the array
     - Concatenates the words into one sentence
     - Displays the reversed message inside the `#output` paragraph

3. Add an event listener to the button to call `revealSecret()` when clicked

---

## 💡 Example

Array:
```javascript
["never", "you", "trust", "should", "robots"]
```

Output:
```
robots should trust you never
```

---

## 🧠 Learning Goal

This challenge helps you:
- Practice working with arrays
- Use loops to process data in reverse
- Use `.innerHTML` to update the page
- Reinforce creative logic using what you already know

---

## 🚀 Bonus Ideas

- Add a second array of punctuation or emojis and insert them between words
- Animate the reveal using `setTimeout()` to build suspense

---

## 📂 Save your file as `m5-challenge.html` and place it in your `challenges/M5/` folder.
