"use strict";

const links = [...document.querySelectorAll(".has-tooltip")];

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
tooltip.dataset.position = "top";

function setTooltipPosition(link, tooltip, dataPosition) {
  const { top, bottom, left, right } = link.getBoundingClientRect();
  switch(dataPosition) {
    case "top": {
      if (tooltip.offsetHeight > top) {
        tooltip.style.top = `${window.scrollY + bottom}px`;
      } else {
        tooltip.style.top = `${window.scrollY + top - tooltip.offsetHeight}px`;
      }
      tooltip.style.left = `${window.scrollX + left}px`;
      break;
    }
    case "bottom": {
      if (document.documentElement.clientHeight - bottom < tooltip.offsetHeight) {
        tooltip.style.top = `${window.scrollY + top - tooltip.offsetHeight}px`;
      } else {
        tooltip.style.top = `${window.scrollY + bottom}px`;
      }
      tooltip.style.left = `${window.scrollX + left}px`;
      break;
    }
    case "left": {
      tooltip.style.top = `${window.scrollY + top - Math.abs(tooltip.offsetHeight - link.offsetHeight) / 2}px`; 
      tooltip.style.left = `${window.scrollX + left - tooltip.clientWidth}px`; 
      if (parseInt(tooltip.style.left) < 0) {
        tooltip.style.left = `${window.scrollX + right}px`;
      }
      break;
    }
    case "right": {
      tooltip.style.top = `${window.scrollY + top - Math.abs(tooltip.offsetHeight - link.offsetHeight) / 2}px`;
      if (document.documentElement.clientWidth - right < tooltip.offsetWidth) {
        tooltip.style.left = `${left - tooltip.offsetWidth}px`;
      } else {
        tooltip.style.left = `${window.scrollX + right}px`;
      }
    }
  }
}

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    if (link.nextElementSibling === tooltip) {
      tooltip.classList.toggle("tooltip_active");
    } else {
      tooltip.innerText = link.title;
      tooltip.classList.add("tooltip_active");
      link.after(tooltip);
    }

    if (tooltip.classList.contains("tooltip_active")) {
      setTooltipPosition(link, tooltip, tooltip.dataset.position);
    }
  })
});
