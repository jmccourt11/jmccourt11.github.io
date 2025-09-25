// Shared site scripts: hamburger menu, smooth scrolling, responsive layout

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu functionality
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburgerIcon && mobileNav) {
    hamburgerIcon.addEventListener('click', function () {
      this.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking on a link
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburgerIcon.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        hamburgerIcon.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // Smooth scroll for same-page anchor links
  const samePageLinks = Array.from(document.querySelectorAll('a[href^="#"]'))
    .filter((a) => a.getAttribute('href') && a.getAttribute('href') !== '#');

  samePageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const targetId = href ? href.substring(1) : '';
      const target = document.getElementById(targetId);

      // Only intercept if target exists on this page
      if (target && link.pathname === window.location.pathname) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Responsive layout adjustments
  function adjustLayout() {
    if (window.innerWidth < 768) {
      document.body.style.fontSize = '14px';
    } else if (window.innerWidth < 1024) {
      document.body.style.fontSize = '16px';
    } else {
      document.body.style.fontSize = '18px';
    }
  }

  window.addEventListener('resize', adjustLayout);
  adjustLayout();
});


