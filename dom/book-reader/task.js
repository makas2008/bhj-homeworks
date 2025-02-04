"use strict";

const book = document.getElementById("book");
const fontSizes = [...document.getElementsByClassName("font-size")];
const textColors = [...document.querySelectorAll(".book__control_color .color")];
const bgColors = [...document.querySelectorAll(".book__control_background .color")];

fontSizes.forEach(fontSize => {
  fontSize.addEventListener("click", e => {
    e.preventDefault();
    fontSizes.forEach(item => item.classList.remove("font-size_active"));

    // 1-ый вариант удаления одного класса, начинающегося с определенной последовательности символов:
    const bookClassName = [...book.classList].find(className => className.startsWith("book_fs-"));
    if (bookClassName) {
      book.classList.remove(bookClassName);
    }

    fontSize.classList.add("font-size_active");
    if (fontSize.dataset.size) {
      book.classList.add(`book_fs-${fontSize.dataset.size}`);
    }
  });
});

textColors.forEach(textColor => {
  textColor.addEventListener("click", e => {
    e.preventDefault();
    textColors.forEach(item => item.classList.remove("color_active"));

    // 2-ой вариант удаления всех классов, начинающихся с определенной последовательности символов:
    book.classList.forEach(className => {
      if (className.startsWith("book_color-")) {
        book.classList.remove(className);
      }
    });

    textColor.classList.add("color_active");
    if (textColor.dataset.textColor) {
      book.classList.add(`book_color-${textColor.dataset.textColor}`);
    }
  });
});

bgColors.forEach(bgColor => {
  bgColor.addEventListener("click", e => {
    e.preventDefault();
    bgColors.forEach(item => item.classList.remove("color_active"));
    
    // 3-ий вариант удаления всех классов, начинающихся с определенной последовательности символов:
    [...book.classList]
      .filter(className => className.startsWith("book_bg-"))
      .forEach(className => book.classList.remove(className));

    bgColor.classList.add("color_active");
    if (bgColor.dataset.bgColor) {
      book.classList.add(`book_bg-${bgColor.dataset.bgColor}`);
    }
  });
});
