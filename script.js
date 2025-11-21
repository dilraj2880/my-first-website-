// CONTACT FORM HANDLER
const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop page reload

  statusText.innerHTML = "Sending...";
  statusText.style.color = "#0b63f6";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      form.reset();
      statusText.innerHTML = "Message sent successfully! 🎉";
      statusText.style.color = "green";
    } else {
      statusText.innerHTML = "Failed to send. Try again!";
      statusText.style.color = "red";
    }
  } catch (error) {
    statusText.innerHTML = "Network error! Please try later.";
    statusText.style.color = "red";
  }
});
// ===== reveal on scroll (robust) =====
function revealOnScroll() {
  const revealElems = document.querySelectorAll('.fade-up, .cards .card, .portfolio-item, #hero-img, .footer.fade-up');
  revealElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight - 80)) {
      el.classList.add('visible');
    }
  });
}

// initial show on load
window.addEventListener('load', () => {
  // small timeout so first paint occurs
  setTimeout(() => {
    revealOnScroll();
  }, 120);
  // ensure hero image visible quickly
  document.querySelector('#hero-img')?.classList.add('visible');
});

// on scroll + resize
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
