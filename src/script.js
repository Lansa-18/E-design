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

const switchImg = () => {
  mImg.forEach((cur, i, arr) => {
    if (i === 0) {
      renderedImg.setAttribute("src", "./images/image-product-1.jpg");
    } else if (i === 1) {
      renderedImg.setAttribute("src", "./image-product-2.a6df5b34.jpg");
    } else if (i === 2) {
      renderedImg.setAttribute("src", "./images/image-product-3.jpg");
    } else if (i === 4) {
      renderedImg.setAttribute("src", "./images/image-product-4.jpg");
    }
  });
};

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
let cartAmtHolder = [];
amtSubmit.addEventListener("click", () => {
  cartAmt.style.display = "block";
//   cartAmt.textContent = amtVal.textContent;
//   amtVal.textContent = 0;
});

mImg.forEach((cur, i, arr) => {
  cur.addEventListener("click", (e) => {
    console.log(cur);
    if (i === 0) {
      renderedImg.setAttribute("src", "/image-product-1.12c5dacc.jpg");
    } else if (i === 1) {
        renderedImg.setAttribute("src", "/image-product-2.a6df5b34.jpg");
        console.log(renderedImg);
    } else if (i === 2) {
      renderedImg.setAttribute("src", "/image-product-3.143cec63.jpg");
    } else if (i === 3) {
      renderedImg.setAttribute("src", "/image-product-4.8eede8d0.jpg");
    }
  });
});

// console.log(mImg);
