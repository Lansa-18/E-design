'use strict';

const amtAdd = document.querySelector('.amount-plus');
const amtSub = document.querySelector('.amount-minus');
const amtVal = document.querySelector('.amount-value');
const amtSubmit = document.querySelector('.amount-submit')

// Implemwnting the plus sign
amtAdd.addEventListener('click', (e) => {    
    e.preventDefault();
    amtVal.textContent >= 0 ? amtVal.textContent++ : 0;
});

// Implemwnting the minus sign
amtSub.addEventListener('click', (e) => {    
    e.preventDefault();
    amtVal.textContent > 0 ? amtVal.textContent-- : 0 ;
});

// console.log('Hello World');
