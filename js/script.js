// ===== CONTACT FORM VALIDATION =====
function validateContactForm() {
  const name = document.getElementById('contactName');
  const email = document.getElementById('contactEmail');
  const message = document.getElementById('contactMessage');
  const alertBox = document.getElementById('formAlert');

  // Reset alert
  alertBox.classList.add('d-none');
  alertBox.classList.remove('alert-success', 'alert-danger');

  let isValid = true;
  let errors = [];

  // Clear previous validation states
  [name, email, message].forEach(el => {
    el.classList.remove('is-invalid', 'is-valid');
  });

  // Validate name
  if (name.value.trim().length < 3) {
    name.classList.add('is-invalid');
    errors.push('Name must be at least 3 characters.');
    isValid = false;
  } else {
    name.classList.add('is-valid');
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('is-invalid');
    errors.push('Invalid Email Format');
    isValid = false;
  } else {
    email.classList.add('is-valid');
  }

  // Validate message
  if (message.value.trim().length < 10) {
    message.classList.add('is-invalid');
    errors.push('Massage at least 10 characters.');
    isValid = false;
  } else {
    message.classList.add('is-valid');
  }

  if (!isValid) {
    alertBox.innerHTML = '<strong>Oops!</strong> Please Fix The Following Error:<ul class="mb-0 mt-1">' +
      errors.map(e => `<li>${e}</li>`).join('') + '</ul>';
    alertBox.classList.remove('d-none');
    alertBox.classList.add('alert-danger');
  } else {
    alertBox.innerHTML = '✅ <strong>Massage Sent!</strong> Thank you, I will reply soon.';
    alertBox.classList.remove('d-none');
    alertBox.classList.add('alert-success');
    // Reset form
    document.getElementById('contactForm').reset();
    [name, email, message].forEach(el => el.classList.remove('is-valid'));
  }

  return false; // prevent actual submit
}

// ===== ANIMATE SKILL PROGRESS BARS =====
function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-bar[data-width]');
  bars.forEach(bar => {
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = bar.getAttribute('data-width');
    }, 200);
  });
}

// ===== GALLERY MODAL OPEN =====
function openGalleryModal(src, caption) {
  document.getElementById('modalImage').src = src;
  document.getElementById('modalCaption').textContent = caption;
  var modal = new bootstrap.Modal(document.getElementById('galleryModal'));
  modal.show();
}

// ===== BACK TO TOP BUTTON =====
window.addEventListener('scroll', function () {
  const btn = document.getElementById('backToTop');
  if (btn) {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function () {
  // Animate progress bars if on skills page
  if (document.querySelector('.progress-bar[data-width]')) {
    animateProgressBars();
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
