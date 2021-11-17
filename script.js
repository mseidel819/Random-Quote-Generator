"use strict";

var currentQuote = "",
  currentAuthor = "";

const scoutQuote = [
  { quote: '"gimmie dat!"', author: '"Scooper"' },
  { quote: '"Don\'t touch me"', author: "Scoot" },
  {
    quote: "\"never take 'no puppy brunch' for an answer.\"",
    author: "Scotus",
  },
  {
    quote: '"eat the ball. You\'ll magically be fine."',
    author: "Scout the Trout",
  },
  { quote: '"Drink until you barf."', author: "Scott" },
  {
    quote: '"You can\'t hide forever, Joe"',
    author: "Dognarok the Destroyer of Weak",
  },
  { quote: '"Trust your instincts to sniff everything"', author: "scroter" },
  { quote: '"Literally"', author: "Scoop" },
  {
    quote:
      '"Don\'t let high counters or garbage cans stop you from acheiving your goals"',
    author: '"Scooper"',
  },
];

function getRandomQuote() {
  return scoutQuote[Math.floor(Math.random() * scoutQuote.length)];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $("#quote-text").animate({ opacity: 0 }, 200, function () {
    $(this).animate({ opacity: 1 }, 200);
    $("#text").text(currentQuote);
  });

  $("#quote-author").animate({ opacity: 0 }, 200, function () {
    $(this).animate({ opacity: 1 }, 200);
    $("#author").text(currentAuthor);
  });

  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent(currentQuote + " -" + currentAuthor)
  );
}

$(document).ready(function () {
  getQuote();
});
