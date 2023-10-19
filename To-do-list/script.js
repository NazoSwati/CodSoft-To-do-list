document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");
    li.innerHTML = `  
        <span>${taskText}</span>
        <button class="edit-button" onclick="editTask(this)">Edit</button>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `  ;

    taskList.appendChild(li);

    taskInput.value = "";
}
function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    const listItem = button.parentElement;
    
    taskList.removeChild(listItem);
}
function editTask(button) {
    const taskSpan = button.previousElementSibling;
    const updatedTaskText = prompt("Edit the task:", taskSpan.textContent);

    if (updatedTaskText !== null) {
        taskSpan.textContent = updatedTaskText;
    }
}
function loadTasks() {
}