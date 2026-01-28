const header = document.querySelector('header');
window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); });

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => { navLinks.classList.remove('active'); });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.work-card, .character-card, .coming-soon-card, .book-showcase, .book-info, .story-container, .contact-container, .legal-container').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'all 0.7s ease'; observer.observe(el);
});
