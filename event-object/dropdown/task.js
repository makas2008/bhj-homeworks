"use strict";

const buttons = Array.from(document.querySelectorAll(".dropdown")); // все кнопки

buttons.forEach(btn => {
  const value = btn.querySelector(".dropdown__value");
  const ul = btn.querySelector(".dropdown__list");

  value.addEventListener("click", () => {
    ul.classList.toggle("dropdown__list_active");
  });

  // 1-ый вариант (со слушателем на ul):
  // ul.addEventListener("click", event => {
  //   event.preventDefault();
  //   value.textContent = event.target.textContent;
  //   ul.classList.remove('dropdown__list_active');
  // });

  // 2-ой вариант (со слушателем на каждом li):
  const items = Array.from(btn.querySelectorAll(".dropdown__item")); // все элементы списка

  items.forEach(li => {
    li.addEventListener("click", event => {
      event.preventDefault(); // отмена перехода по ссылке
      value.textContent = li.textContent.trim();
      ul.classList.remove('dropdown__list_active');
    });
  });
});
