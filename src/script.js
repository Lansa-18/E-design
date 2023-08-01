"use strict";

const amtAdd = document.querySelector(".amount-plus");
const amtSub = document.querySelector(".amount-minus");
const amtVal = document.querySelector(".amount-value");
const amtSubmit = document.querySelector(".amount__submit");
const cartAmt = document.querySelector(".cart-amount");

const mImg = document.querySelectorAll(".m-img");
const renderedImg = document.querySelector(".render-img");

const cartIcon = document.querySelector(".img-cart");
const cartDrop = document.querySelector(".cart__dropdown");
const cartContFlex = document.querySelector(".cart__content--flex");
const cartConth3 = document.querySelector('.cart__content--h3');

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

//  Function responsibe for adding items into the cart
const addToCart = (cartamt) => {
  const priceShoe = 125 * cartamt;
  cartContFlex.innerHTML = `
      <img class="img-thumb" src="/image-product-1-thumbnail.64dcbb28.jpg" alt="shoe1-thumb">
      <div class="content-texts">
        <p class="p1">Fall Limited Edition Sneakers</p>
        <p class="p2">$125 x ${cartamt} = <span>$${priceShoe}.00</span></p>
      </div>
      <img class="img-delete" src="/icon-delete.022a9515.svg" alt="icon-delete">
      `;
};

// Implementing the add to cart functionality
let cartAmtHolder = [];
amtSubmit.addEventListener("click", () => {
  cartAmt.style.display = "block";
  //   cartAmt.textContent = amtVal.textContent;
  cartAmtHolder.push(amtVal.textContent);
  amtVal.textContent = 0;
  const amtTotal = cartAmtHolder.reduce((acc, amt) => acc + parseFloat(amt), 0);
  amtTotal > 0 ? 
  cartAmt.textContent = amtTotal;
  cartConth3.classList.add('hidden');
  addToCart(cartAmt.textContent);
});

// Implementing the img-thumbnails functionality.
mImg.forEach((cur, i, arr) => {
  cur.addEventListener("click", (e) => {
    if (i === 0) {
      renderedImg.setAttribute("src", "/image-product-1.12c5dacc.jpg");
    } else if (i === 1) {
      renderedImg.setAttribute("src", "/image-product-2.a6df5b34.jpg");
    } else if (i === 2) {
      renderedImg.setAttribute("src", "/image-product-3.143cec63.jpg");
    } else if (i === 3) {
      renderedImg.setAttribute("src", "/image-product-4.8eede8d0.jpg");
    }

    // Removing the active-img class from other images
    mImg.forEach((img, index) => {
      if (index !== i) {
        img.classList.remove("active-img");
      }
    });

    // Adding the active-img to the clicked class
    cur.classList.add("active-img");
  });
});

// Implementing the cart dropdown functionality
cartIcon.addEventListener("click", () => {
  cartDrop.classList.toggle("hidden");
});

// console.log(mImg);
