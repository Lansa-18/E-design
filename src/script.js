"use strict";

const amtAdd = document.querySelector(".amount-plus");
const amtSub = document.querySelector(".amount-minus");
const amtVal = document.querySelector(".amount-value");
const amtSubmit = document.querySelector(".amount__submit");
const cartAmt = document.querySelector(".cart-amount");

const mImg = document.querySelectorAll(".m-img");
const renderedImg = document.querySelector(".render-img");
// const renderedImg2 = document.querySelector(".render-img2");
// const renderedImgs = document.querySelectorAll(".render-img");

const cartIcon = document.querySelector(".img-cart");
const cartDrop = document.querySelector(".cart__dropdown");
const cartContFlex = document.querySelector(".cart__content--flex");
const cartConth3 = document.querySelector(".cart__content--h3");

// Defining img file path of the images
const thumb1 = "/image-product-1-thumbnail.64dcbb28.jpg";
// const thumb2 = "/image-product-2-thumbnail.e8d992f7.jpg";
// const thumb3 = "/image-product-1-thumbnail.64dcbb28.jpg";
// const thumb4 = "/image-product-1-thumbnail.64dcbb28.jpg";

const popup = document.querySelector(".popup");

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

// Implementing img-popup
renderedImg.addEventListener('click', ()=>{
    popup.classList.toggle('hidden');

})

//  Function responsibe for adding items into the cart
const addToCart = (cartamt) => {
  // calculation of the price of shoe
  const priceShoe = 125 * cartamt;

  cartContFlex.innerHTML = `
    <img class="img-thumb" src = ${thumb1} alt="shoe1-thumb">
    <div class="content-texts">
      <p class="p1">Fall Limited Edition Sneakers</p>
      <p class="p2">$125 x ${cartamt} = <span>$${priceShoe}.00</span></p>
    </div>
    <img class="img-delete" src="/icon-delete.022a9515.svg" alt="icon-delete">
    `;
};

// const delIcon = document.querySelector('.img-delete');

// delIcon.addEventListener('click', ()=>{
//     console.log('i was clicked');
// })

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
      (cartContFlex.style.display = "flex"))
    : ((cartAmt.style.display = "none"), (cartContFlex.style.display = "none"));

  // calling the function addToCart to display the UI in the cart.
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

// console.log(renderedImgs);
// mImg.forEach((cur, i, arr) => {
//   cur.addEventListener("click", (e) => {
//     if (i === 0) {
//       renderedImgs.forEach((renderedImg) => {
//         renderedImg.setAttribute("src", "/image-product-1.12c5dacc.jpg");
//       });
//     } else if (i === 1) {
//       renderedImgs.forEach((renderedImg) => {
//         renderedImg.setAttribute("src", "/image-product-2.a6df5b34.jpg");
//       });
//     } else if (i === 2) {
//       renderedImgs.forEach((renderedImg) => {
//         renderedImg.setAttribute("src", "/image-product-3.143cec63.jpg");
//       });
//     } else if (i === 3) {
//       renderedImgs.forEach((renderedImg) => {
//         renderedImg.setAttribute("src", "/image-product-4.8eede8d0.jpg");
//       });
//     }

//     // Removing the active-img class from other images
//     mImg.forEach((img, index) => {
//       if (index !== i) {
//         img.classList.remove("active-img");
//       }
//     });

//     // Adding the active-img to the clicked class
//     cur.classList.add("active-img");
//   });
// });

// Implementing the cart dropdown functionality
cartIcon.addEventListener("click", () => {
  cartDrop.classList.toggle("hidden");
});

const isTrue = true == [];
const isFalse = true == ![];
// console.log(isTrue + isFalse);
console.log(![]);

// console.log(mImg);
