// defining variables to parts of the page I will need for input and listeners
let heroQuote = document.querySelector('.hero blockquote');
let heroAuthor = document.querySelector('.hero p');
let quoteList = document.querySelector('.quotes');
let quoteTxt = document.querySelector('#quote-txt');
let author = document.querySelector('#author');

// grabbing Save button to use in event listener
let saveBtn = document.querySelector('#save-btn');

// Event listener to add input quotation to hero banner
saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let inputQuote = quoteTxt.value;
    let inputAuthor = author.value;

    heroQuote.innerHTML = inputQuote;
    heroAuthor.innerHTML = inputAuthor;

    // Clears input text values
    quoteTxt.value = '';
    author.value = '';
});

let quoteGenerator = (quoteTxt, author, quoteList) => {
    let quote = document.createElement('li');
    quote.setAttribute('class', 'quote');

    let newQuoteTxt = document.createElement('blockquote');
    newQuoteTxt.innerText = quoteTxt;

    let newAuthor = document.createElement('p');
    newAuthor.innerText = author;
};