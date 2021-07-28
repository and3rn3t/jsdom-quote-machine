// console.log('main.js loaded');

let quoteTxt = document.querySelector('#quote-txt');
let authorTxt = document.querySelector('#author');
let submitBtn = document.querySelector('#save-btn');
let newQuote;
let newAuthor;

submitBtn.addEventListener('click', event => {
    console.log(quoteTxt.innerHTML);
})