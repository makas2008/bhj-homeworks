"use strict";

const products = document.querySelector(".products"); // товары
const cartProducts = document.querySelector(".cart__products"); // товары в корзине

// добавление товара в корзину:
function addCartProduct(obj) {
  const cartProduct = document.createElement("div");
  cartProduct.className = "cart__product";
  cartProduct.dataset.id = obj.id;
  cartProduct.insertAdjacentHTML("beforeend", `<img class="cart__product-image" src="${obj.src}">`);
  cartProduct.insertAdjacentHTML("beforeend", `<div class="cart__product-count">${obj.quantity}</div>`);
  cartProducts.append(cartProduct);
}

// изменение количества уже имеющегося в корзине товара:
function changeQuantity(obj, index) {
  const cartProduct = cartProducts.children[index];
  const previousQuantity = +cartProduct.querySelector(".cart__product-count").textContent;
  cartProduct.querySelector(".cart__product-count").textContent = previousQuantity + obj.quantity;
}

// делегирование события "клик":
products.addEventListener("click", event => {
  if (event.target.classList.contains("product__quantity-control_dec")) {
    const productQuantityValue = event.target.nextElementSibling;
    if (productQuantityValue.textContent > 1) {
      productQuantityValue.textContent--;
    }
  } else if (event.target.classList.contains("product__quantity-control_inc")) {
    const productQuantityValue = event.target.previousElementSibling;
    productQuantityValue.textContent++;
  } else if (event.target.classList.contains("product__add")) {
    const product = event.target.closest(".product"); // выбранный товар
    // формируем объект со свойствами для передачи в функцию по ссылке:
    const productObj = {
      id: product.dataset.id,
      src: product.querySelector("img").src,
      quantity: +product.querySelector(".product__quantity-value").textContent
    };
    const index = [...cartProducts.children].findIndex(child => child.dataset.id === productObj.id);
    // если выбранный товар уже есть в корзине:
    if (~index) {
      changeQuantity(productObj, index);
    } else {
      addCartProduct(productObj);
    }
  }
});
