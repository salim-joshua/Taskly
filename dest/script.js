"use strict";
const list = document.querySelector("#list");
const form = document.getElementById("#new-task-form");
const input = document.querySelector("'new-task-title");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
});
