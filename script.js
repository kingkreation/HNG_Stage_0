// Live clock and small accessibility helpers for the profile card.
// The clock uses Date.now() so automated tests can read a stable timestamp.
document.addEventListener('DOMContentLoaded', function() {
  (function() {
    const timeEl = document.querySelector('[data-testid="test-user-time"]');
    if (!timeEl) return;
    
    // Update the visible time to the current millisecond value.
    function setNow() {
      const now = Date.now();
      timeEl.textContent = String(now);
    }
    
    // Show the current time immediately so tests that read it right away see a recent value.
    setNow();
    
    // Keep the clock reasonably live without being too chatty.
    const interval = setInterval(setNow, 250);
    
    // Ensure social links are keyboard focusable and open safely
    const socialLinks = document.querySelectorAll('[data-testid^="test-user-social-"]');
    socialLinks.forEach(a => {
      if (!a.getAttribute('tabindex')) {
        a.setAttribute('tabindex', '0');
      }
    });
    
    // Cleanup on unload
    window.addEventListener('beforeunload', function() {
      clearInterval(interval);
    });
    
    // Small helper exposed for debugging or automated tests.
    window.__profileCardDebug = {
      getTimeValue() { return Number(timeEl.textContent); },
      setAvatar(src) {
        const img = document.querySelector('[data-testid="test-user-avatar"]');
        if (img) img.src = src;
      }
    };
  })();
});