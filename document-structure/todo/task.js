"use strict";

const form = document.forms.tasks__form;
const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

form.addEventListener("submit", event => {
  event.preventDefault();

  const inputText = input.value.trim();

  if (inputText) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    tasksList.append(newTask);
    newTask.insertAdjacentHTML("beforeEnd", `<div class="task__title">${inputText}</div>`);
    newTask.insertAdjacentHTML("beforeEnd", `<a href="#" class="task__remove">&times;</a>`);
  }

  form.reset();
});

// делегирование события "клик" на весь список задач:
tasksList.addEventListener("click", event => {
  if (event.target.classList.contains("task__remove")) {
    event.preventDefault();
    event.target.closest(".task").remove();
  }
})
