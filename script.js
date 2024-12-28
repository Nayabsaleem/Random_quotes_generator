const quotes = [
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    }
  ];
  
  // Function to generate random quote
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return randomQuote;
  }
  
  // Function to display random quote
  function displayRandomQuote() {
    const randomQuote = generateRandomQuote();
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    quoteText.innerText = randomQuote.text;
    quoteAuthor.innerText = `- ${randomQuote.author}`;
  }
  
  // Button to generate new quote
  const newQuoteButton = document.getElementById("new-quote-button");
  newQuoteButton.addEventListener("click", displayRandomQuote);
  
  // Display initial quote
  displayRandomQuote();
  