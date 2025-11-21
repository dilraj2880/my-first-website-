document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Sending...";
  // Demo: fake delay to show user feedback
  setTimeout(() => {
    status.textContent = "Message sent! I'll contact you soon.";
    form.reset();
  }, 800);
});
