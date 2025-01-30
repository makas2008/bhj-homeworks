"use strict";

const tabContainer = document.querySelectorAll(".tabs");

tabContainer.forEach(container => {
  const tabs = container.querySelectorAll(".tab"); // все вкладки
  const tabContents = container.querySelectorAll(".tab__content"); // содержимое всех вкладок

  tabs.forEach((item, index) => {
    item.addEventListener("click", () => {
      tabs.forEach(tab => tab.classList.remove("tab_active"));
      item.classList.add("tab_active"); 
      tabContents.forEach(content => content.classList.remove("tab__content_active"));
      tabContents[index].classList.add("tab__content_active");
    });
  });
});
