document.addEventListener("DOMContentLoaded", function () {
    new Typed("#animated-text", {
      strings: ["HANUMAN CELL CARE"],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
        // Toggle aria-expanded attribute
        const isExpanded = mainNav.classList.contains('open');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !mainNav.contains(event.target)) {
            mainNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
  