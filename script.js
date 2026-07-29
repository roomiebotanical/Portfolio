// Hamburger menu toggle — wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;

    // Toggle menu
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(!expanded));
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Swap portfolio images on hover
    const hoverImages = document.querySelectorAll('.work-item img[data-hover-src]');
    hoverImages.forEach((img) => {
        const defaultSrc = img.getAttribute('src');
        const hoverSrc = img.getAttribute('data-hover-src');

        img.addEventListener('mouseenter', () => {
            img.setAttribute('src', hoverSrc);
        });

        img.addEventListener('mouseleave', () => {
            img.setAttribute('src', defaultSrc);
        });

        img.addEventListener('focus', () => {
            img.setAttribute('src', hoverSrc);
        });

        img.addEventListener('blur', () => {
            img.setAttribute('src', defaultSrc);
        });
    });
});
