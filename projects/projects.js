// scripts/projects.js

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal .close');
  
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const project = card.getAttribute('data-project');
        const modal = document.getElementById(`modal-${project}`);
        if (modal) {
          modal.style.display = 'block';
        }
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'none';
          modal.querySelector('video').pause();
        }
      });
    });
  
    // Close modal when clicking outside the content
    window.addEventListener('click', event => {
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
          modal.querySelector('video').pause();
        }
      });
    });
  });
  