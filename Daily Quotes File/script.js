document.addEventListener("DOMContentLoaded", function () {
    const timeElement = document.getElementById("time");
    const todayElement = document.getElementById("today");

    const currentTime = new Date().toLocaleTimeString();
    const todayDate = new Date().toLocaleDateString(); 

    timeElement.textContent = `${currentTime}`;
    todayElement.textContent = `${todayDate}`;
});


const quotes = [
    "Believe you can and you're halfway there.",
    "The future depends on what you do today.",
    "Act as if what you do makes a difference. It does.",
    "Keep going, you're getting there!",
    "You are stronger than you think.",
  ];

const quoteElement = document.getElementById('quote');
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteElement.textContent = randomQuote;

    const copyButton = document.getElementById('copy-quote');
    const favoriteButton = document.getElementById('favorite-quote');
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(randomQuote).then(() => {
      alert("Quote copied!");
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  });
  

  favoriteButton.addEventListener('click', () => {
    chrome.storage.local.get(['favorites'], (result) => {
      const favorites = result.favorites || [];
  
      if (!favorites.includes(randomQuote)) {
        favorites.push(randomQuote);
        chrome.storage.local.set({ favorites }, () => {
          favoriteButton.classList.add('saved');
          alert("Quote added to favorites!");
        });
      } else {
        alert("Quote already in favorites!");
      }
    });
  });
  
  // Check if the current quote is already saved
  chrome.storage.local.get(['favorites'], (result) => {
    const favorites = result.favorites || [];
    if (favorites.includes(randomQuote)) {
      favoriteButton.classList.add('saved');
    }
  });
  