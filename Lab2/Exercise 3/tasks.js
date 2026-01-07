const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const columns = document.querySelectorAll(".column");
const completionMsg = document.getElementById("completionMsg");

// Add task
addBtn.addEventListener("click", addNewTask);

function addNewTask() {
    const taskName = taskInput.value.trim();
    if (taskName === "") return;

    // Create task card
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.draggable = true;
    taskCard.innerHTML = `
        <strong>${taskName}</strong><br>
        <small>${new Date().toLocaleDateString()}</small>
    `;

    // Add drag events to task card
    taskCard.addEventListener("dragstart", dragStart);
    taskCard.addEventListener("dragend", dragEnd);

    // Add to To Do column
    document.getElementById("todo").querySelector(".column-content").appendChild(taskCard);
    taskInput.value = "";
}

// Drag and Drop functionality
let draggedElement = null;

function dragStart(e) {
    draggedElement = this;
    e.dataTransfer.effectAllowed = "move";
}

function dragEnd(e) {
    draggedElement = null;
}

// Column dragover and drop events
columns.forEach(column => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedElement) {
            // Move task to this column
            column.querySelector(".column-content").appendChild(draggedElement);

            // Special handling for Completed column
            if (column.dataset.status === "completed") {
                draggedElement.classList.add("completed");
                completionMsg.classList.remove("hidden");
                setTimeout(() => {
                    completionMsg.classList.add("hidden");
                }, 2000);
            }
        }
    });
});
