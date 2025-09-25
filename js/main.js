// Initialize theme from localStorage
(function initializeThemeFromStorage() {
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.documentElement.classList.add('dark');
        }
    } catch (_) {
        // Ignore storage errors
    }
})();

// Toggle dark mode handler
function toggleDarkMode() {
    const root = document.documentElement;
    const isDark = root.classList.toggle('dark');
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (_) {
        // Ignore storage errors
    }
}

// Setup after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Wire theme toggle button if present
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleDarkMode);
        // Set initial aria-pressed state
        themeBtn.setAttribute('aria-pressed', document.documentElement.classList.contains('dark') ? 'true' : 'false');
        themeBtn.addEventListener('click', function(){
            themeBtn.setAttribute('aria-pressed', document.documentElement.classList.contains('dark') ? 'true' : 'false');
        });
    }

    // Mobile menu toggle
    var hamburger = document.querySelector('.hamburger-icon');
    var mobileNav = document.querySelector('.mobile-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('open');
            mobileNav.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });

        // Close when a link is clicked
        var navLinks = document.querySelectorAll('.mobile-nav a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }
});


