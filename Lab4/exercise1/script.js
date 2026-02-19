const usernameInput = document.getElementById("username");
const messageDiv = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("registrationForm");

let isAvailable = false;

// Check username availability using AJAX (Fetch API)
usernameInput.addEventListener("input", function () {

    const username = usernameInput.value.trim();

    if (username.length < 3) {
        messageDiv.textContent = "Minimum 3 characters required";
        messageDiv.className = "error";
        submitBtn.disabled = true;
        return;
    }

    messageDiv.textContent = "Checking...";
    messageDiv.className = "loading";
    submitBtn.disabled = true;

    // AJAX call to local JSON file
    fetch("users.json")
        .then(response => response.json())
        .then(data => {

            const exists = data.usernames.includes(username.toLowerCase());

            if (exists) {
                messageDiv.textContent = "Username already taken";
                messageDiv.className = "error";
                submitBtn.disabled = true;
                isAvailable = false;
            } else {
                messageDiv.textContent = "Username available";
                messageDiv.className = "success";
                submitBtn.disabled = false;
                isAvailable = true;
            }
        })
        .catch(error => {
            messageDiv.textContent = "Error checking username";
            messageDiv.className = "error";
            submitBtn.disabled = true;
        });
});

// Prevent submission if unavailable
form.addEventListener("submit", function (e) {
    if (!isAvailable) {
        e.preventDefault();
        alert("Please choose an available username");
    } else {
        alert("Registration Successful!");
    }
});
