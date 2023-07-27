'use strict';

const amtAdd = document.querySelector('.amount-plus');
const amtSub = document.querySelector('.amount-minus');
const amtVal = document.querySelector('.amount-value');

amtAdd.addEventListener('click', (e) => {    
    // e.preventDefault();
    amtVal < 0 ? 0 : amtVal.textContent++;
});

amtSub.addEventListener('click', (e) => {    
    // e.preventDefault();
    amtVal < 0 ? 0 : amtVal.textContent++;
});

