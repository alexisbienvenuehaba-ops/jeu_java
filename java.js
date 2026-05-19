// Animate skill bars on load
window.addEventListener('load', () => {
  const skills = document.querySelectorAll('.skill-item');
  skills.forEach((item, i) => {
    const level = item.getAttribute('data-level');
    const fill = item.querySelector('.skill-fill');
    setTimeout(() => {
      fill.style.width = level + '%';
    }, 300 + i * 100);
  });
});

// Reveal sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));