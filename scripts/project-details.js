// scripts/project-details.js

document.addEventListener('DOMContentLoaded', () => {
    // Optional: Implement any interactive features for the project detail page.
    // For example, image galleries, additional modals, or dynamic content loading.
    
    // Example: Lightbox for project images
    const images = document.querySelectorAll('.project-gallery img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('modal-close');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalCaption.textContent = img.alt;
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
  