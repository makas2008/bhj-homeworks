"use strict";

const rotators = [...document.getElementsByClassName("rotator")];

function rotate(cases) {
  let index = cases.findIndex(item => item.classList.contains("rotator__case_active"));
  let currentCase = cases[index];

  currentCase.classList.remove("rotator__case_active");
  index = Math.round(Math.random() * (cases.length - 1));
  currentCase = cases[index];
  currentCase.classList.add("rotator__case_active");

  if (!currentCase.style.color) {
    currentCase.style.color = currentCase.dataset.color;
  }
  
  const speed = +currentCase.dataset.speed;
  setTimeout(rotate, speed, cases);
}

rotators.forEach(rotator => {
  const rotatorCases = [...rotator.getElementsByClassName("rotator__case")];
  rotate(rotatorCases);
});
