// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Reveal‑on‑scroll using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
  
  // Simple contact form handler
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
    e.target.reset();
  });