"use strict";

const amtAdd = document.querySelector(".amount-plus");
const amtSub = document.querySelector(".amount-minus");
const amtVal = document.querySelector(".amount-value");
const amtSubmit = document.querySelector(".amount__submit");
const cartAmt = document.querySelector(".cart-amount");

// const mImg = document.querySelector('.m-img1');
// const mImg2 = document.querySelector('.m-img2');
// const mImg3 = document.querySelector('.m-img3');
// const mImg4 = document.querySelector('.m-img4');

const mImg = document.querySelectorAll(".m-img");
const renderedImg = document.querySelector(".render-img");

// Implemwnting the plus sign
amtAdd.addEventListener("click", (e) => {
  e.preventDefault();
  amtVal.textContent >= 0 ? amtVal.textContent++ : 0;
});

// Implemwnting the minus sign
amtSub.addEventListener("click", (e) => {
  e.preventDefault();
  amtVal.textContent > 0 ? amtVal.textContent-- : 0;
});

// Implementing the add to cart functionality
amtSubmit.addEventListener("click", () => {
  cartAmt.style.display = "block";
  cartAmt.textContent = amtVal.textContent;
  amtVal.textContent = 0;
});

mImg.forEach((cur, i, arr) => {
  if (cur[i] === 0) {
    cur.setAttribute("src", "./images/image-product-1.jpg");
  } else if (cur[i] === 1) {
    cur.setAttribute("src", "./images/image-product-2.jpg");
  } else if (cur[i] === 2) {
    cur.setAttribute("src", "./images/image-product-3.jpg");
  } else if (cur[i] === 4) {
    cur.setAttribute("src", "./images/image-product-4.jpg");
  }
});

// console.log('Hello World');
