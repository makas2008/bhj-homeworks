"use strict";

const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

if (!document.cookie.includes("close=true")) {
  modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = `${encodeURIComponent("close")}=${encodeURIComponent("true")}`;
});
