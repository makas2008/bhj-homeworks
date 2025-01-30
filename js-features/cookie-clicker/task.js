"use strict";

const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let startClickerCounter = +clickerCounter.textContent;
const clickerSpeed = document.getElementById("clicker__speed");
let start = new Date();

cookie.onclick = function() {
  clickerCounter.textContent = ++startClickerCounter;
  this.width = startClickerCounter % 2 ? 250 : 200;

  const stop = new Date();
  clickerSpeed.textContent = +(1000 / (stop - start)).toFixed(2);
  start = stop;
}
