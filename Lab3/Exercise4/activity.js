let activityLog = [];
let clickCount = 0;

const logDiv = document.getElementById("log");
const warningDiv = document.getElementById("warning");

// Utility to log activity
function logActivity(type, target) {
  const activity = {
    type: type,
    target: target.tagName,
    time: new Date().toLocaleTimeString()
  };

  activityLog.push(activity);
  displayLog();

  // Suspicious activity check
  if (type === "Click") {
    clickCount++;
    if (clickCount > 10) {
      warningDiv.textContent = "⚠ Suspicious Activity: Too many clicks!";
    }
  }
}

// Display log dynamically
function displayLog() {
  logDiv.innerHTML = "";
  activityLog.forEach(a => {
    logDiv.innerHTML += `
      ${a.time} - ${a.type} on ${a.target}<br>
    `;
  });
}

// Event listeners (BUBBLING)
document.addEventListener("click", e => {
  logActivity("Click", e.target);
});

document.addEventListener("keydown", e => {
  logActivity("Key Press", e.target);
});

// Event listener (CAPTURING)
document.addEventListener("focus", e => {
  logActivity("Focus", e.target);
}, true);

// Reset log
function resetLog() {
  activityLog = [];
  clickCount = 0;
  logDiv.innerHTML = "";
  warningDiv.textContent = "";
}

// Export log
function exportLog() {
  let text = "User Activity Log:\n\n";
  activityLog.forEach(a => {
    text += `${a.time} - ${a.type} on ${a.target}\n`;
  });

  alert(text);
}