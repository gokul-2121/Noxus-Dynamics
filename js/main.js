document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Navbar background on scroll
    const topbar = document.querySelector('.topbar');
    window.addEventListener('scroll', () => {
        topbar.style.background = window.scrollY > 80
            ? 'rgba(10, 10, 10, 0.95)'
            : 'rgba(10, 10, 10, 0.85)';
    }, { passive: true });

    // 3. Scroll Reveal (IntersectionObserver, observe-once)
    const fadeEls = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));

    // 4. Hero Thumbnail Click (visual toggle)
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
});
