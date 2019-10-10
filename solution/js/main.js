console.log('main.js loaded');

(function(window) {
  const document = window.document;
  const form = document.getElementById('form-quote');
  const heroQuote = document.querySelector('.hero blockquote');
  const heroAuthor = document.querySelector('.hero p');
  const quotesContainer = document.querySelector('.quotes');
  const formQuoteTxt = document.getElementById('quote-txt');
  const formAuthor = document.getElementById('author');
  const defaultQuotes = [
    {
      "quote": "Whether you think you can or think you can’t, you’re right.",
      "author": "Henry Ford"
    },
    {
      "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
      "author": "Winston Churchill"
    },
    {
      "quote": "Who looks outside, dreams; who looks inside, awakens.",
      "author": "Carl Jung"
    },
    {
      "quote": "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.",
      "author": "Dr. Martin Luther King"
    }];

  const addNewQuote = (quoteTxt, author, container, prepend=true) => {
    const newQuote = document.createElement('li');
    newQuote.setAttribute('class', 'quote');
    const newQuoteTxt = document.createElement('blockquote');
    newQuoteTxt.innerText = quoteTxt;
    const newAuthor = document.createElement('p');
    newAuthor.innerText = author;

    newQuote.appendChild(newQuoteTxt);
    newQuote.appendChild(newAuthor);

    prepend ? container.prepend(newQuote) : container.appendChild(newQuote);
  }

  for (let quote of defaultQuotes) {
    addNewQuote(quote.quote, quote.author, quotesContainer, false);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const quoteTxt = formQuoteTxt.value;
    const author = formAuthor.value;

    if (!quoteTxt) {
      alert('You must enter a quote');
    }
    if (!author) {
      alert('You must enter an author');
    }
    if (!quoteTxt || !author) {
      return;
    }

    heroQuote.innerText = quoteTxt;
    heroAuthor.innerText = author;

    addNewQuote(quoteTxt, author, quotesContainer);
    defaultQuotes.push({
      "quote": quoteTxt,
      "author": author
    });

    formQuoteTxt.value = '';
    formAuthor.value = '';
  });

  window.setInterval(() => {
    const randomQuote = defaultQuotes[Math.floor(Math.random() * defaultQuotes.length)];
    heroQuote.innerText = randomQuote.quote;
    heroAuthor.innerText = randomQuote.author;
  }, 5000);

})(window);