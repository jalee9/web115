# Instructor Notes: Intro to JavaScript Assignment

## Overview

This assignment introduces students to the **basic structure of an HTML document** and how to use **embedded JavaScript** to create simple dynamic behavior on a webpage. Students are working with:

- HTML paragraph tags (`<p>`) to structure content
- The `<script>` tag to run JavaScript
- Basic JavaScript functions: `alert()`, `getElementById()`, `.innerHTML`, and `.style`
- DOM (Document Object Model) manipulation to change content and styling

The focus is on helping students understand how JavaScript interacts with HTML and affects both **content** and **presentation** dynamically.

---

## Learning Objectives

By completing this assignment, students will:

- Practice writing semantic HTML and organizing information clearly
- Understand how to embed JavaScript in an HTML page using the `<script>` tag
- Use `alert()` to create a basic user interaction
- Select and modify an HTML element using `getElementById()` and `innerHTML`
- Apply basic inline styling with `.style` to change the appearance of elements
- Begin understanding how JavaScript can be used to manipulate the DOM

---

## Code Breakdown

```html
<p>Sally Student</p>
<p>sstudent@my.waketech.edu</p>
<p>Information Technology</p>
```

- Displays static student information using paragraph elements.
- Introduces the importance of semantic tags and page structure.

```html
<p id="results"></p>
```

- Acts as a placeholder for dynamic content injected via JavaScript.
- Reinforces the idea of targeting elements with `id` attributes.

```javascript
alert("Coding with JavaScript");
```

- Triggers a pop-up when the page loads.
- Demonstrates simple user feedback using browser features.

```javascript
document.getElementById("results").innerHTML = "JavaScript is Cool";
```

- Dynamically updates the content of the paragraph with `id="results"`.
- Demonstrates how JavaScript can "talk to" HTML and change it.

```javascript
document.body.style.color = "red";
```

- Applies a red color to all body text using inline JavaScript styling.
- Reinforces the concept of using `.style` to affect visual appearance.
- Encourages students to think about how JavaScript can change the look of a webpage.


## Coding Tips
- JavaScript runs from top to bottom, so order matters.
- Experiment: What happens if you change the text color or use a different message in the alert?
- View your page source and inspect elements to see the changes made by JavaScript.
- **Bonus Practice:** Try a different color or add another element to modify.
<!-- Moved to solutions/