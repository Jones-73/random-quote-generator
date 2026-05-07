const quotes = [
  "Stay hungry, stay foolish.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency."
];

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  console.log(quotes[index]);
}

randomQuote();
