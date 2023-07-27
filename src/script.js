'use strict';

const amtAdd = document.querySelector('.amount-plus');
const amtSub = document.querySelector('.amount-minus');
const amtVal = document.querySelector('.amount-value');

amtAdd.addEventListener('click', (e) => {    
    // e.preventDefault();
    // amtVal.textContent < 0 ? 0 : amtVal.textContent++;
    if (amtVal.textContent >= 0) {
        amtVal.textContent ++;
    } else {
        amtVal.textContent = 0;
    }
});

amtSub.addEventListener('click', (e) => {    
    // e.preventDefault();
    amtVal.textContent > 0 ? amtVal.textContent-- : 0 ;
    // amtVal.textContent--;
});

console.log('Hello World');
