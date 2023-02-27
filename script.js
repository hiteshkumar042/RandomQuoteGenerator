function generateQuote() {
  const quotes = {
    "- Albert Einstein": "Imagination is more important than knowledge.",
    "- Mahatma Gandhi": "Be the change you wish to see in the world.",
    "- Maya Angelou":
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "- Lana Del Rey ":
      "Who are you? Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them? I have. I am fucking crazy. But I am free.",
    "- Carrie Bradshaw":
      "Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.",
  };

  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quoteVal = quotes[author];
  console.log(quoteVal);

  document.getElementById("quote").innerText = quoteVal;
  document.getElementById("author").innerText = author;

  if (authors > quotes.length - 1) {
    author = 0;
  }
}
