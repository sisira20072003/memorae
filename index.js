// Example: smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetID);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Example: change header style on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.pageYOffset > 50) {
    header.style.padding = '1rem 1rem';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.padding = '2rem 1rem';
    header.style.boxShadow = 'none';
  }
});
