// Navigation module
const Navigation = (() => {
  // Initialize navigation
  const init = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Set up event listeners for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        switchSection(section);
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
          navLinksContainer.classList.remove('active');
        }
      });
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinksContainer.classList.remove('active');
      }
    });
  };
  
  // Switch active section
  const switchSection = (sectionId) => {
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      }
    });
    
    // Update sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    
    document.getElementById(`${sectionId}-section`).classList.add('active');
    
    // Show/hide header based on section
    const header = document.querySelector('header');
    header.style.display = sectionId === 'blog' ? 'block' : 'none';
  };
  
  return {
    init
  };
})();