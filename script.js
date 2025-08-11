// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // If you don't have a backend, we fall back to opening user's email client:
  const name = document.getElementById('MADDI JAHNAVI').value.trim();
  const email = document.getElementById('jahnavimaddi2701@gmail.com').value.trim();
  const message = document.getElementById('HI').value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill all fields.';
    return;
  }

  // Create mailto fallback:
  const mailto = `mailto:${encodeURIComponent jahnavimaddi2701@gmail.com'}?subject=${encodeURIComponent('Contact from ' + name)}&body=${encodeURIComponent(message + '\\n\\nFrom: ' + name + ' (' + email + ')')}`;
  window.location.href = mailto;
  status.textContent = 'Opening mail client...';
});


    