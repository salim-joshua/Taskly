import { generateRandomId } from "./idGenerator.js"

type Task = {
    id: string,
    title: string,
    completed: boolean,
    createdAt: Date,
}

const tasks: Task[] = loadTasks();

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

tasks.forEach(addListItem)

function addListItem(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")
    const delButton = document.createElement("button")
    const checkbox = document.createElement("input")

    delButton.textContent = "x"
    delButton.name = "delete-button"
    delButton.classList.add("delete-button")

    delButton.addEventListener("click", () => {
        deleteTask(item, task.id);
    })

    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        toggleCrossedText(item);
        saveTasks();
    })
    checkbox.type = "checkbox"
    checkbox.checked = task.completed

    label.append(checkbox, task.title)
    item.append(label)
    item.append(delButton)
    list?.append(item);
}

function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function deleteTask(item: HTMLLIElement, taskId: string) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    if (taskIndex === -1) return

    tasks.splice(taskIndex, 1)
    item.remove()

    saveTasks();
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS")
    if (taskJSON == null) return []
    return JSON.parse(taskJSON)
}

function toggleCrossedText(item: HTMLLIElement) {
    item.classList.contains("crossed-text") ? item.classList.remove("crossed-text") : item.classList.add("crossed-text");

}

form?.addEventListener("submit", e => {
    e.preventDefault()

    if (input?.value == "" || input?.value == null) return;

    const newTask: Task = {
        id: generateRandomId(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    }

    tasks.push(newTask)
    saveTasks();
    addListItem(newTask)
    input.value = ""
})
