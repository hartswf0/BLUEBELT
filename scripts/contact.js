// scripts/contact.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement form submission logic (e.g., AJAX request or form handling)
    alert('Thank you for your message!');
    this.reset();
  });
  