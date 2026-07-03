document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        var isDark = document.documentElement.classList.contains('dark');
        themeBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');

        themeBtn.addEventListener('click', function () {
            var nowDark = document.documentElement.classList.toggle('dark');
            themeBtn.setAttribute('aria-pressed', nowDark ? 'true' : 'false');
            try { localStorage.setItem('theme', nowDark ? 'dark' : 'light'); } catch (_) {}
        });
    }

    // Mobile nav
    var hamburger = document.querySelector('.hamburger-menu');
    var mobileNav = document.getElementById('mobile-nav');
    var hamburgerIcon = hamburger && hamburger.querySelector('.hamburger-icon');

    function openNav() {
        hamburgerIcon.classList.add('open');
        mobileNav.classList.add('open');
        mobileNav.setAttribute('aria-hidden', 'false');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close navigation menu');
        document.body.classList.add('no-scroll');
    }

    function closeNav() {
        hamburgerIcon.classList.remove('open');
        mobileNav.classList.remove('open');
        mobileNav.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open navigation menu');
        document.body.classList.remove('no-scroll');
    }

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function () {
            if (mobileNav.classList.contains('open')) {
                closeNav();
            } else {
                openNav();
            }
        });

        document.querySelectorAll('.mobile-nav a').forEach(function (link) {
            link.addEventListener('click', closeNav);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
                closeNav();
                hamburger.focus();
            }
        });
    }
});
