"use strict";

const dead = document.getElementById("dead");
let deadCount = +dead.textContent;
const lost = document.getElementById("lost");
let lostCount = +lost.textContent;

function restart() {
  deadCount = dead.textContent = 0;
  lostCount = lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.onclick = function() {
    if (hole.className.includes("hole_has-mole")) {
      dead.textContent = ++deadCount;
      if (deadCount === 10) {
        alert("You won!");
        restart();
      }
    } else {
      lost.textContent = ++lostCount;
      if (lostCount === 5) {
        alert("You lose!");
        restart();
      }
    }
  }
}
