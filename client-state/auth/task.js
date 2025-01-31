"use strict";

const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const logoutBtn = document.getElementById("btn-logout");

// очистка полей формы и хранилища localStorage:
function resetAll() {
  signinForm.reset();
  localStorage.clear();
}

// авторизация:
function getAccess() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  logoutBtn.classList.add("btn-logout_active");
}

// деавторизация:
function removeAccess() {
  signin.classList.add("signin_active");
  welcome.classList.remove("welcome_active");
  logoutBtn.classList.remove("btn-logout_active");
  resetAll();
}

// получение id юзера из localStorage:
if (localStorage.getItem("user_id")) {
  userId.textContent = localStorage.getItem("user_id");
  getAccess();
}

// попытка авторизации:
signinForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(signinForm);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.send(formData);

  xhr.addEventListener("load", () => {
    const data = xhr.response;  // {success: false} || {success: true, user_id: 16}

    if (data.success) {
      const currentUserId = data.user_id;
      userId.textContent = currentUserId;
      localStorage.setItem("user_id", currentUserId);
      getAccess();
    } else {
      alert("Неверный логин/пароль");
      resetAll();
    }
  });
});

// логаут по клику на кнопке выхода:
logoutBtn.addEventListener("click", () => {
  removeAccess();
});
