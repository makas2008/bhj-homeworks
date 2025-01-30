"use strict";

// --------------- обязательное задание: ---------------
const timer_1 = document.getElementById("timer");
let startTimer_1 = +timer_1.textContent; // startTimer_1 = 59

function countDown_1() {
  if (startTimer_1 > 0) {
    timer_1.textContent = --startTimer_1; // startTimer_1 = 58
  } else if (startTimer_1 === 0) {
    alert("Вы победили в конкурсе!");
    return;
  } else {
    alert("Невалидное значение");
    return;
  }

  setTimeout(countDown_1, 1000); // вложенный setTimeout
}

setTimeout(countDown_1, 1000);


// --------------- дополнительные задания (#1 и #2): ---------------
const timer_2 = document.getElementById("timer");
let startTimer_2 = timer_2.textContent; // "01:01:05"
let [hours, minutes, seconds] = startTimer_2.split(":"); // "01", "01", "05";
const downloadLink = document.getElementById("download-link"); // доп. задание #2

function countDown_2() {
  if (+minutes > 59 || +seconds > 59) {
    alert("Невалидное значение");
    return;
  }

  if (+seconds) {
    seconds = ("0" + --seconds).slice(-2);
    timer_2.textContent = [hours, minutes, seconds].join(":");
  } else {
    if (+minutes) {
      minutes = ("0" + --minutes).slice(-2);
      seconds = "59";
      timer_2.textContent = [hours, minutes, seconds].join(":");
    } else {
      if (+hours) {
        hours = ("0" + --hours).slice(-2);
        minutes = "59";
        seconds = "59";
        timer_2.textContent = [hours, minutes, seconds].join(":");
      } else {
        alert("Вы победили в конкурсе!");
        downloadLink.click(); // доп. задание #2
        return;
      }
    }
  }

  setTimeout(countDown_2, 1000); // вложенный setTimeout
}

// setTimeout(countDown_2, 1000);
