"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idGenerator_1 = require("./idGenerator");
const list = document.querySelector("#list");
const form = document.getElementById("#new-task-form");
const input = document.querySelector("'new-task-title");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const newTask = {
        id: (0, idGenerator_1.generateRandomId)(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };
});
