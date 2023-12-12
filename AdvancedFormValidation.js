/* 
File Name: AdvancedFormValidation.js 

Description: This code demonstrates a sophisticated form validation technique using regular expressions and complex conditional statements. It validates various form inputs and displays appropriate error messages, ensuring data integrity and a professional user experience.

Author: John Doe
Date: January 1, 2023
*/

// Define the form validation function
function validateForm() {
  // Extract form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const age = document.getElementById("age").value;
  
  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  
  // Error messages
  let errors = "";
  
  // Name validation
  if (!name.match(nameRegex)) {
    errors += "Please enter a valid name.<br/>";
  }
  
  // Email validation
  if (!email.match(emailRegex)) {
    errors += "Please enter a valid email address.<br/>";
  }
  
  // Password validation
  if (!password.match(passwordRegex)) {
    errors += "Please enter a valid password:<br/>";
    errors += "- At least 8 characters<br/>";
    errors += "- Contains at least one uppercase letter<br/>";
    errors += "- Contains at least one lowercase letter<br/>";
    errors += "- Contains at least one digit<br/>";
  }
  
  // Confirm password validation
  if (password !== confirmPassword) {
    errors += "Password and confirm password do not match.<br/>";
  }
  
  // Age validation
  if (isNaN(age) || parseInt(age) < 18 || parseInt(age) > 99) {
    errors += "Please enter a valid age (between 18 and 99).<br/>";
  }
  
  // Display errors or submit the form
  if (errors !== "") {
    document.getElementById("error-message").innerHTML = errors;
    return false; // Prevent form submission
  } else {
    document.getElementById("error-message").innerHTML = "";
    return true; // Allow form submission
  }
}

// Attach form submission event listener
document.getElementById("my-form").addEventListener("submit", validateForm);