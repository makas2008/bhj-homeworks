"use strict";

const textarea = document.getElementById("editor");
const btnReset = document.querySelector(".button_reset");

// заполнение textarea при перезагрузке страницы:
textarea.value = localStorage.getItem("text");

// добавление в веб-хранилище данных из textarea:
textarea.addEventListener("input", () => {  
  localStorage.setItem("text", textarea.value);
});

// очистка textarea по клику на кнопку:
btnReset.addEventListener("click", () => {
  localStorage.removeItem("text");
  textarea.value = "";
});

// синхронизация данных в разных вкладках и окнах:
window.addEventListener("storage", event => {
  if (event.key === "text") {
    textarea.value = localStorage.getItem("text");
  }
});
