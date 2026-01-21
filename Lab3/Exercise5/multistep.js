let currentStage = 1;

// Temporary data storage
let formData = {
  name: "",
  email: "",
  password: "",
  age: ""
};

showStage(currentStage);

// Show stage
function showStage(stage) {
  document.querySelectorAll(".stage").forEach(s => s.style.display = "none");
  document.getElementById("stage" + stage).style.display = "block";
  updateProgress(stage);
}

// Progress bar update
function updateProgress(stage) {
  const percent = (stage - 1) * 33;
  document.getElementById("progressBar").style.width = percent + "%";
}

// Next stage with validation
function nextStage(stage) {
  if (validateStage(stage)) {
    currentStage++;
    showStage(currentStage);
  }
}

// Previous stage
function prevStage(stage) {
  currentStage--;
  showStage(currentStage);
}

// Validation logic
function validateStage(stage) {
  let valid = true;

  if (stage === 1) {
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      error1.textContent = "Name is required";
      valid = false;
    } else {
      error1.textContent = "";
      formData.name = name;
    }
  }

  if (stage === 2) {
    const email = document.getElementById("email").value.trim();
    if (!email.includes("@")) {
      error2.textContent = "Enter a valid email";
      valid = false;
    } else {
      error2.textContent = "";
      formData.email = email;
    }
  }

  if (stage === 3) {
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      error3.textContent = "Password must be at least 6 characters";
      valid = false;
    } else {
      error3.textContent = "";
      formData.password = password;
    }
  }

  if (stage === 4) {
    const age = document.getElementById("age").value;
    if (age < 18) {
      error4.textContent = "Age must be 18 or above";
      valid = false;
    } else {
      error4.textContent = "";
      formData.age = age;
    }
  }

  return valid;
}

// Final submission
document.getElementById("multiForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateStage(4)) {
    document.getElementById("progressBar").style.width = "100%";
    alert("Form submitted successfully!\n\n" + JSON.stringify(formData, null, 2));
  }
});