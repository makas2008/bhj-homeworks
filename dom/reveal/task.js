"use strict";

const reveals = [...document.getElementsByClassName("reveal")];

window.addEventListener("scroll", () => {
  reveals.forEach(reveal => {
    const { top, bottom } = reveal.getBoundingClientRect();
    if (top > 0 && top < document.documentElement.clientHeight || 
        bottom > 0 && bottom < document.documentElement.clientHeight) {
      reveal.classList.add("reveal_active");
    }
  });
});
