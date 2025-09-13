// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Get form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Form submit handler (must be a function for checker)
  function handleSubmit(event) {
    event.preventDefault(); // prevent page reload

    // Get and trim inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation state
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address (must include "@" and ".").');
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Show feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // green
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'; // red
    }
  }

  // Attach the handler
  form.addEventListener('submit', handleSubmit);
});

