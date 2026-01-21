const questions = [
  {
    id: "q1",
    text: "Enter your name",
    type: "text",
    required: true,
    maxLength: 20
  },
  {
    id: "q2",
    text: "Select your gender",
    type: "radio",
    required: true,
    options: ["Male", "Female", "Other"]
  },
  {
    id: "q3",
    text: "Select your skills (max 2)",
    type: "checkbox",
    required: true,
    maxSelect: 2,
    options: ["Java", "Python", "JavaScript", "C++"]
  }
];

const form = document.getElementById("surveyForm");

// Generate form dynamically
questions.forEach(q => {
  const div = document.createElement("div");
  div.className = "question";

  const label = document.createElement("label");
  label.textContent = q.text;
  div.appendChild(label);

  if (q.type === "text") {
    const input = document.createElement("input");
    input.type = "text";
    input.id = q.id;
    div.appendChild(input);
  }

  if (q.type === "radio") {
    q.options.forEach(opt => {
      div.innerHTML += `
        <input type="radio" name="${q.id}" value="${opt}"> ${opt}<br>
      `;
    });
  }

  if (q.type === "checkbox") {
    q.options.forEach(opt => {
      div.innerHTML += `
        <input type="checkbox" name="${q.id}" value="${opt}"> ${opt}<br>
      `;
    });
  }

  const error = document.createElement("div");
  error.className = "error";
  error.id = q.id + "Error";
  div.appendChild(error);

  form.appendChild(div);
});

// Validation logic
function submitSurvey() {
  let valid = true;

  questions.forEach(q => {
    const errorDiv = document.getElementById(q.id + "Error");
    errorDiv.textContent = "";

    if (q.type === "text") {
      const value = document.getElementById(q.id).value.trim();

      if (q.required && value === "") {
        errorDiv.textContent = "This field is required";
        valid = false;
      } else if (value.length > q.maxLength) {
        errorDiv.textContent = "Maximum " + q.maxLength + " characters allowed";
        valid = false;
      }
    }

    if (q.type === "radio") {
      const selected = document.querySelector(`input[name="${q.id}"]:checked`);
      if (q.required && !selected) {
        errorDiv.textContent = "Please select an option";
        valid = false;
      }
    }

    if (q.type === "checkbox") {
      const checked = document.querySelectorAll(`input[name="${q.id}"]:checked`);
      if (checked.length === 0) {
        errorDiv.textContent = "Select at least one option";
        valid = false;
      } else if (checked.length > q.maxSelect) {
        errorDiv.textContent = "Select maximum " + q.maxSelect + " options";
        valid = false;
      }
    }
  });

  if (valid) {
    alert("Survey submitted successfully!");
    form.reset();
  }
}