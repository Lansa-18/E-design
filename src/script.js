"use strict";

const amtAdd = document.querySelector(".amount-plus");
const amtSub = document.querySelector(".amount-minus");
const amtVal = document.querySelector(".amount-value");
const amtSubmit = document.querySelector(".amount__submit");
const cartAmt = document.querySelector(".cart-amount");

const mImg = document.querySelectorAll(".m-img");
const mImg2 = document.querySelectorAll(".m-img2");
const renderedImg = document.querySelector(".render-img");
const renderedImg2 = document.querySelector(".render-img2");

const cartIcon = document.querySelector(".img-cart");
const cartDrop = document.querySelector(".cart__dropdown");
const cartDropCont = document.querySelector('.cart__dropdown--contents');
const cartConth3 = document.querySelector(".cart__content--h3");

// Defining img file path of the images
const thumb1 = "/image-product-1-thumbnail.64dcbb28.jpg";

const popup = document.querySelector(".popup");
const closeIcon = document.querySelector(".svg-close");
const prevsIcon = document.querySelector(".prevs-icon");
const nextIcon = document.querySelector(".next-icon");

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

let cartItem;
cartItem = document.createElement('div');
cartItem.classList.add('cart__content--flex');
//  Function responsibe for adding items into the cart
const addToCart = (cartamt) => {
  // calculation of the price of shoe
  const priceShoe = 125 * cartamt;

  cartItem.innerHTML = `
    <img class="img-thumb" src = ${thumb1} alt="shoe1-thumb">
    <div class="content-texts">
      <p class="p1">Fall Limited Edition Sneakers</p>
      <p class="p2">$125 x ${cartamt} = <span>$${priceShoe}.00</span></p>
    </div>
    <img class="img-delete" src="/icon-delete.022a9515.svg" alt="icon-delete">
    `;

    cartDropCont.appendChild(cartItem);

    // Event delegation for the functionality
    cartDropCont.addEventListener('click', (e)=>{
      if (e.target.classList.contains('img-delete')) {
        cartItem = e.target.closest('.cart__content--flex');
        if (cartItem) {
          cartItem.remove();
          cartAmt.style.display = 'none';
          cartConth3.classList.remove('hidden')
        }
      }
    })
  };

// Implementing the add to cart functionality
let cartAmtHolder = [];
amtSubmit.addEventListener("click", () => {
  // setting the cart amount to be visible
  cartAmt.style.display = "block";
  cartAmtHolder.push(amtVal.textContent);
  amtVal.textContent = 0;

  // adding up all the numbers in the holders array and then storing it into a variable
  const amtTotal = cartAmtHolder.reduce((acc, amt) => acc + parseFloat(amt), 0);

  // Updating the UI based on the condition true or false of the amtTotal variable.
  amtTotal > 0
    ? ((cartAmt.textContent = amtTotal),
      cartConth3.classList.add("hidden"),
      (cartItem.style.display = "flex"))
    : ((cartAmt.style.display = "none"), (cartItem.style.display = "none"));

  // calling the function addToCart to display the UI in the cart.
  addToCart(cartAmt.textContent);
});

// function that changes img-thumbnails on click
const img1 = "/image-product-1.12c5dacc.jpg";
const img2 = "image-product-2.a6df5b34.jpg";
const img3 = "/image-product-3.143cec63.jpg";
const img4 = "/image-product-4.8eede8d0.jpg";

const changeImg = (imgNodeList, imgRender) => {
  // Implementing the img-thumbnail functionality

  imgNodeList.forEach((cur, i, arr) => {
    cur.addEventListener("click", () => {
      if (i === 0) {
        imgRender.setAttribute("src", img1);
      } else if (i === 1) {
        imgRender.setAttribute("src", img2);
      } else if (i === 2) {
        imgRender.setAttribute("src", img3);
      } else if (i === 3) {
        imgRender.setAttribute("src", img4);
      }

      // Removing the active-img class from other images
      imgNodeList.forEach((img, index) => {
        if (index !== i) {
          img.classList.remove("active-img");
        }
      });

      // Adding the active-img class to the currently clicked image
      cur.classList.add("active-img");
    });
  });
};

changeImg(mImg, renderedImg);
changeImg(mImg2, renderedImg2);

// Implementing the cart dropdown functionality
cartIcon.addEventListener("click", () => {
  cartDrop.classList.toggle("hidden");
});

// Implementing img-popup
renderedImg.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Implementing the NEXT nd PREVS icon functionality.

// creating an array containing the images that would be changing.
const newMimg2 = [img1, img2, img3, img4];

// setting a new count to keep track of the current index.
let currentIndex = 0;

// the next icon functionality
// nextIcon.addEventListener("click", (e) => {
//   e.preventDefault();
//   currentIndex = (currentIndex + 1) % newMimg2.length;
//   renderedImg2.setAttribute("src", newMimg2[currentIndex]);

//   console.log("Next was clicked");
// });

// prevsIcon.addEventListener("click", (e) => {
//   e.preventDefault();
//   currentIndex = (currentIndex - 1 + newMimg2.length) % newMimg2.length;
//   renderedImg2.setAttribute("src", newMimg2[currentIndex]);

//   console.log("prevs was clicked");
// });

// console.log(mImg);