document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const successMessage = document.querySelector('[data-testid="test-contact-success"]');
  
  // Validation helper
  function validateField(field, errorId) {
    const errorEl = document.getElementById(errorId);
    let isValid = true;
    let errorMessage = '';
    
    if (!field.value.trim()) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (field.type === 'email' && !isValidEmail(field.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    } else if (field.id === 'message' && field.value.trim().length < 10) {
      isValid = false;
      errorMessage = 'Message must be at least 10 characters long';
    }
    
    errorEl.textContent = errorMessage;
    return isValid;
  }
  
  // Email validation helper
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  // Form submission handler
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('fullname');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    const isNameValid = validateField(name, 'name-error');
    const isEmailValid = validateField(email, 'email-error');
    const isSubjectValid = validateField(subject, 'subject-error');
    const isMessageValid = validateField(message, 'message-error');
    
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      // Show success message
      successMessage.hidden = false;
      
      // Reset form
      form.reset();
      
      // Clear any remaining error messages
      document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
      });
    }
  });
  
  // Real-time validation on blur
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(input, input.id + '-error');
    });
    
    // Clear error on focus
    input.addEventListener('focus', function() {
      const errorEl = document.getElementById(input.id + '-error');
      errorEl.textContent = '';
    });
  });
});