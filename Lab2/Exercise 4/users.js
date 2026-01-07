const userForm = document.getElementById("userForm");
const usersTableBody = document.querySelector("#usersTable tbody");
const formMsg = document.getElementById("formMsg");
const clearAllBtn = document.getElementById("clearAllBtn");

let users = JSON.parse(localStorage.getItem("users")) || [];

// Load users on page load
displayUsers();

// Form validation and submit
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation
    if (!name || !email || !mobile || !password) {
        showMsg("All fields are mandatory!", "error");
        return;
    }
    
    if (!/^\d{10}$/.test(mobile)) {
        showMsg("Mobile number must be exactly 10 digits!", "error");
        return;
    }
    
    if (password.length < 6) {
        showMsg("Password must be minimum 6 characters!", "error");
        return;
    }

    // Check duplicate email
    if (users.some(user => user.email === email)) {
        showMsg("Email already registered!", "error");
        return;
    }

    // Add user
    const user = { name, email, mobile, password };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    
    showMsg("User registered successfully!", "success");
    userForm.reset();
    displayUsers();
});

// Clear all users
clearAllBtn.addEventListener("click", () => {
    if (confirm("Delete all users?")) {
        users = [];
        localStorage.removeItem("users");
        displayUsers();
    }
});

function displayUsers() {
    usersTableBody.innerHTML = "";
    
    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td><button class="delete-btn" onclick="deleteUser(${index})">Delete</button></td>
        `;
        usersTableBody.appendChild(row);
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

function showMsg(message, type) {
    formMsg.textContent = message;
    formMsg.className = type;
    setTimeout(() => {
        formMsg.textContent = "";
        formMsg.className = "";
    }, 3000);
}
window.deleteUser = deleteUser; // Expose deleteUser to global scope for inline onclick