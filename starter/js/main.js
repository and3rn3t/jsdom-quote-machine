// defining variables to parts of the page I will need for input and listeners
let heroQuote = document.querySelector('.hero blockquote');
let heroAuthor = document.querySelector('.hero p');
let quoteList = document.querySelector('.quotes');
let quoteTxt = document.querySelector('#quote-txt');
let author = document.querySelector('#author');

// grabbing Save button to use in event listener
let saveBtn = document.querySelector('#save-btn');

saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let inputQuote = quoteTxt.value;
    let inputAuthor = author.value;

    heroQuote.innerHTML = inputQuote;
    heroAuthor.innerHTML = inputAuthor;

    quoteTxt.value = '';
    author.value = '';
})