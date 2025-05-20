// Enable strict mode to enforce stricter parsing and error handling
"use strict";

// User object constructor
function User(fullName, email, password, age, favoriteLanguage) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.age = age;
    this.favoriteLanguage = favoriteLanguage;
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault();

    // Get form elements
    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let age = document.getElementById("age");
    let favoriteLanguage = document.getElementById("favoriteLanguage");

    // Array to store error messages
    let errors = [];

    // Validate full name
    if (fullName.value.trim() === "") {
        errors.push({ id: "fullNameError", message: "Full name is required" });
    } else {
        errors.push({ id: "fullNameError", message: "" });
    }

    // Validate email
    let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value.match(emailPattern)) {
        errors.push({ id: "emailError", message: "Please enter a valid email address" });
    } else {
        errors.push({ id: "emailError", message: "" });
    }

    // Validate password
    if (password.value.length < 8) {
        errors.push({ id: "passwordError", message: "Password must be at least 8 characters long" });
    } else {
        errors.push({ id: "passwordError", message: "" });
    }

    // Validate confirm password
    if (password.value !== confirmPassword.value) {
        errors.push({ id: "confirmPasswordError", message: "Passwords do not match" });
    } else {
        errors.push({ id: "confirmPasswordError", message: "" });
    }

    // Validate age
    if (age.value < 18) {
        errors.push({ id: "ageError", message: "You must be at least 18 years old" });
    } else {
        errors.push({ id: "ageError", message: "" });
    }

    // Display error messages or create a new User instance
    let valid = true;
    for (let error of errors) {
        let errorMessage = document.getElementById(error.id);
        if (error.message) {
            errorMessage.innerHTML = error.message;
            valid = false;
        } else {
            errorMessage.innerHTML = "";
        }
    }

    if (valid) {
        let newUser = new User(fullName.value, email.value, password.value, age.value, favoriteLanguage.value);
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("successMessage").innerText = "Registration successful! Welcome, " + newUser.fullName;
    }
}

// Add an event listener to the form's submit event
document.getElementById('registrationForm').addEventListener('submit', validateForm);
