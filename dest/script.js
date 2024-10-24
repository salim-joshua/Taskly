import { generateRandomId } from "./idGenerator.js";
const tasks = loadTasks();
const list = document.querySelector("#list");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
tasks.forEach(addListItem);
function addListItem(task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const delButton = document.createElement("button");
    const checkbox = document.createElement("input");
    delButton.textContent = "x";
    delButton.name = "delete-button";
    delButton.classList.add("delete-button");
    delButton.addEventListener("click", () => {
        deleteTask(item, task.id);
    });
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);
    item.append(label);
    item.append(delButton);
    list === null || list === void 0 ? void 0 : list.append(item);
}
function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
}
function deleteTask(item, taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1)
        return;
    tasks.splice(taskIndex, 1);
    item.remove();
    saveTasks();
}
function loadTasks() {
    const taskJSON = localStorage.getItem("TASKS");
    if (taskJSON == null)
        return [];
    return JSON.parse(taskJSON);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const newTask = {
        id: generateRandomId(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };
    tasks.push(newTask);
    saveTasks();
    addListItem(newTask);
    input.value = "";
});
