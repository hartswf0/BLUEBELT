// scripts/about.js

// Optional: Add any interactive features for the About Us page
// For example, animations on scroll, or team member profiles expansion

// Example: Simple fade-in effect on scroll
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
  
    const observerOptions = {
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);
  
    teamMembers.forEach(member => {
      observer.observe(member);
    });
  });
  