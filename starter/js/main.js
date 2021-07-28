// grabbing elements needed for listener
let heroQuote = document.querySelector('.hero blockquote');
let heroAuthor = document.querySelector('.hero p');
let quoteList = document.querySelector('.quotes');

// grabbing input text from user
let inputTxt = document.querySelector('#quote-txt');
let inputAuthor = document.querySelector('#author');

// grabbing Save button to use in event listener
let saveBtn = document.querySelector('#save-btn');

// Event listener to add input quotation to hero banner
saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let quoteTxt = inputTxt.value;
    let author = inputAuthor.value;

    heroQuote.innerHTML = quoteTxt;
    heroAuthor.innerHTML = author;

    // Call the quote generator with the parameters defined above and 
    quoteGenerator(quoteTxt, author, quoteList);

    // Clears input text values
    inputTxt.value = '';
    inputAuthor.value = '';
});

let quoteGenerator = (quoteTxt, author) => {
    let newQuote = document.createElement('li');
    newQuote.setAttribute('class', 'quote');

    let newQuoteTxt = document.createElement('blockquote');
    newQuoteTxt.innerText = quoteTxt;

    let newAuthor = document.createElement('p');
    newAuthor.innerText = author;

    newQuote.appendChild(newQuoteTxt);
    newQuote.appendChild(newAuthor);

    quoteList.prepend(newQuote);
};