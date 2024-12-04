export function initializePageTransitions() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });
}

function handleLinkClick(e) {
  e.preventDefault();
  const nextPage = e.target.href;
  
  // Add fade-out class to trigger transition
  document.body.classList.add('fade-out');
  document.querySelector('main').classList.add('fade-in');
  
  // Wait for animation to complete before changing page
  setTimeout(() => {
    window.location.href = nextPage;
  }, 300);
}

export function handlePageLoad() {
  // Remove fade classes when page loads
  document.body.classList.remove('fade-out');
  const main = document.querySelector('main');
  if (main) {
    main.classList.remove('fade-in');
  }
  
  // Restore scroll position to top
  window.scrollTo(0, 0);
}