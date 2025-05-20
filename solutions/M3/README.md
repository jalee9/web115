# M3 Assignment – JavaScript Debugging Challenge

## ✅ Objective

This exercise helps students practice debugging by identifying and fixing a JavaScript error on a simple webpage.

The page was intended to display:
- An alert message when loaded
- A styled rainbow using HTML `div` elements and JavaScript

## 🔍 Problem

The original code failed to execute because the JavaScript attempted to modify an element with ID `blue`, which did not exist in the HTML. This caused a crash and prevented the script from running.

## 🛠️ Fixes Made

1. **Added Missing HTML Element**  
   A `<div id="blue">BLUE</div>` was added to the HTML to match the element referenced in `trouble.js`.

2. **Updated Styles**  
   The `#blue` CSS rule was added so it displays with the correct background.

3. **Comments in Code**  
   JavaScript and HTML were commented to explain changes.

## 💡 Learning Outcome

This assignment reinforces how:
- DOM manipulation depends on correctly matching IDs
- JavaScript execution can fail silently or break with missing references
- Developer Tools and `alert()` can help in debugging process

# 🧠 Student Reflection Prompts – M3 Debugging Assignment

Use the prompts below to reflect on what you learned during the debugging activity. You may respond in writing, in a discussion post, or during class sharing.

---

### 1. What specific error caused the JavaScript to fail?  
How did you identify the error, and what steps did you take to confirm it?

---

### 2. What was your debugging process?  
Describe how you used browser tools (e.g., Developer Console, View Source) to troubleshoot the problem.

---

### 3. Why is it important for JavaScript and HTML to "match" when working with IDs?  
Give an example of what might go wrong when they don't.

---

### 4. How did fixing this bug help you better understand the DOM?

---

### 5. What surprised you during this activity?  
Was there something that didn’t work the way you expected?

---

### 6. If this were a larger web application, what might be the consequences of this kind of error?  
Think about user experience and functionality.

---

### 7. What strategies will you use in the future when your code doesn’t work as expected?

---

### 8. Optional Bonus:  
Add one more `div` to the rainbow and style it correctly. What did you learn by adding your own code?

---
<!-- Moved to solutions/