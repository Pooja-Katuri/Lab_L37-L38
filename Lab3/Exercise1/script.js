// Get form elements
const form = document.getElementById("form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const ageField = document.getElementById("age");
const roleField = document.getElementById("role");
const skillsContainer = document.getElementById("skillsContainer");
const skillsField = document.getElementById("skills");
const errorMsg = document.getElementById("errorMsg");

// ---------------- UTILITY FUNCTIONS ----------------

// Show error
function showError(input, message) {
  input.style.border = "2px solid red";
  errorMsg.textContent = message;
}

// Clear error
function clearError(input) {
  input.style.border = "2px solid green";
  errorMsg.textContent = "";
}

// Email validation
function validateEmail() {
  const email = emailField.value.trim();
  const domainAllowed = email.endsWith("@gmail.com") || email.endsWith("@edu.in");

  if (!domainAllowed) {
    showError(emailField, "Email must be @gmail.com or @edu.in");
    return false;
  }
  clearError(emailField);
  return true;
}

// Password validation (dynamic)
function validatePassword() {
  const password = passwordField.value;
  const role = roleField.value;

  let regex;

  if (role === "Admin") {
    regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/;
  } else if (role === "Teacher") {
    regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  } else {
    regex = /.{6,}/;
  }

  if (!regex.test(password)) {
    showError(passwordField, "Password does not meet role requirements");
    return false;
  }
  clearError(passwordField);
  return true;
}

// Confirm password
function validateConfirmPassword() {
  if (passwordField.value !== confirmPasswordField.value) {
    showError(confirmPasswordField, "Passwords do not match");
    return false;
  }
  clearError(confirmPasswordField);
  return true;
}

// Age validation
function validateAge() {
  const age = parseInt(ageField.value);

  if (roleField.value === "Student" && age < 16) {
    showError(ageField, "Student must be at least 16");
    return false;
  }
  if (roleField.value === "Admin" && age < 25) {
    showError(ageField, "Admin must be at least 25");
    return false;
  }
  clearError(ageField);
  return true;
}

// Role-based field visibility
function handleRoleChange() {
  if (roleField.value === "Student" || roleField.value === "Teacher") {
    skillsContainer.style.display = "block";
  } else {
    skillsContainer.style.display = "none";
    skillsField.value = "";
  }
}

// ---------------- REAL-TIME EVENTS ----------------

emailField.addEventListener("input", validateEmail);
passwordField.addEventListener("input", validatePassword);
confirmPasswordField.addEventListener("input", validateConfirmPassword);
ageField.addEventListener("input", validateAge);
roleField.addEventListener("change", () => {
  handleRoleChange();
  validatePassword();
  validateAge();
});

// ---------------- FORM SUBMISSION ----------------

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword() &&
    validateAge();

  if (isValid) {
    alert("Registration Successful!");
    form.reset();
    skillsContainer.style.display = "none";
  } else {
    alert("Please fix validation errors");
  }
});