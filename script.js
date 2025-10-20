// Profile card behavior, uses Date.now() for testable time value
document.addEventListener('DOMContentLoaded', function() {
  (function() {
    const timeEl = document.querySelector('[data-testid="test-user-time"]');
    if (!timeEl) return;
    
    function setNow() {
      const now = Date.now();
      timeEl.textContent = String(now);
    }
    
    // Set now immediately so tests reading value right after render see Date.now() close to real time
    setNow();
    
    // Update regularly, 250ms keeps it live without being noisy
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
    
    // Expose a tiny debug helper on the window for test debugging if needed
    window.__profileCardDebug = {
      getTimeValue() { return Number(timeEl.textContent); },
      setAvatar(src) {
        const img = document.querySelector('[data-testid="test-user-avatar"]');
        if (img) img.src = src;
      }
    };
  })();
});