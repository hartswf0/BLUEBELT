// scripts/manifesto.js

// Optional: Add interactive elements to the Manifesto page
// For example, quote rotations or animations

// Example: Rotating Quotes
document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.manifesto .quote');
    let currentQuoteIndex = 0;
  
    function showNextQuote() {
      quotes[currentQuoteIndex].classList.remove('visible');
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
      quotes[currentQuoteIndex].classList.add('visible');
    }
  
    setInterval(showNextQuote, 5000); // Change quote every 5 seconds
  });
  