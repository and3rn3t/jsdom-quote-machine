// Grabbing elements needed for listener
let heroQuote = document.querySelector('.hero blockquote');
let heroAuthor = document.querySelector('.hero p');
let quoteList = document.querySelector('.quotes');

// Grabbing input text fields from user
let inputTxt = document.querySelector('#quote-txt');
let inputAuthor = document.querySelector('#author');

// Grabbing Save button to use in event listener
let saveBtn = document.querySelector('#save-btn');

// Bring in defaultQuotes from assignment instructions
const defaultQuotes = [
    {
        quote: "Whether you think you can or think you can’t, you’re right.",
        author: "Henry Ford"
    },
    {
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill"
    },
    {
        quote: "Who looks outside, dreams; who looks inside, awakens.",
        author: "Carl Jung"
    },
    {
        quote: "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.",
        author: "Dr. Martin Luther King"
}];

// Event listener & add input quotation to hero banner
saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let quoteTxt = inputTxt.value;
    let author = inputAuthor.value;

    // Alert user if they have not entered a quotation input and return to do so
    if (quoteTxt === '') {
        alert('Please enter a quotation to continue.');
        return;
    };

    // Alert user if they have not entered an author input and return to do so
    if (author === '') {
        alert('Please enter the author to continue.');
        return;
    };

    heroQuote.innerHTML = quoteTxt;
    heroAuthor.innerHTML = author;

    // Call the quote generator with the parameters defined above
    quoteGenerator(quoteTxt, author, defaultQuotes);

    defaultQuotes.push(
        {
        "quote": quoteTxt,
        "author": author
        }
    );

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

for (let quote of defaultQuotes) {
    quoteGenerator(quote.quote, quote.author, defaultQuotes);
};