document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    /* ─── HERO ──────────────────────────────────────── */

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        // Logo drops in and bounces lightly
        .from('.hero-logo-wrapper', {
            y: -40, opacity: 0,
            duration: 1, ease: 'bounce.out'
        })
        // Title words stagger up
        .from('.title-word', {
            y: 50, opacity: 0,
            duration: 0.8, stagger: 0.15,
            ease: 'back.out(1.5)'
        }, '-=0.5')
        // Subtitle fades up
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
        // Buttons
        .from('.hero-cta', { y: 15, opacity: 0, duration: 0.6 }, '-=0.4')
        // Side nav slides in
        .from('.side-nav', { x: -80, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=1.2')
        // Glass cards pop out from center
        .from('.glass-card', {
            scale: 0.5, opacity: 0,
            duration: 0.7, stagger: 0.1,
            ease: 'back.out(2)'
        }, '-=1');

    /* ─── SIDE NAV ACTIVE ──────────────────────────── */

    const secs = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.sn-link[href^="#"]');
    window.addEventListener('scroll', () => {
        let cur = '';
        secs.forEach(s => { if (scrollY >= s.offsetTop - 200) cur = s.id; });
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
    });

    /* ─── SERVICES ─────────────────────────────────── */

    gsap.from('.sec-head', {
        scrollTrigger: { trigger: '.services', start: 'top 88%' },
        y: 30, opacity: 0, duration: 0.8
    });

    gsap.from('.svc-row', {
        scrollTrigger: { trigger: '.svc-list', start: 'top 85%' },
        x: -30, opacity: 0, duration: 0.6, stagger: 0.08
    });

    /* ─── PORTFOLIO ────────────────────────────────── */

    gsap.from('.portfolio .sec-head', {
        scrollTrigger: { trigger: '.portfolio', start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.8
    });

    // Cards appear (the CSS handles the auto-scroll)
    gsap.from('.pcard', {
        scrollTrigger: { trigger: '.port-marquee', start: 'top 90%' },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.06
    });

    /* ─── ABOUT ────────────────────────────────────── */

    gsap.from('.about-left', {
        scrollTrigger: { trigger: '.about-grid', start: 'top 85%' },
        x: -40, opacity: 0, duration: 0.9
    });
    gsap.from('.stat', {
        scrollTrigger: { trigger: '.stats-grid', start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1
    });

    /* ─── CONTACT ──────────────────────────────────── */

    gsap.from('.contact-card', {
        scrollTrigger: { trigger: '.contact-card', start: 'top 88%' },
        y: 40, opacity: 0, duration: 0.9
    });

    /* ─── FOOTER ───────────────────────────────────── */

    gsap.from('.ft-top > *', {
        scrollTrigger: { trigger: '.footer', start: 'top 92%' },
        y: 20, opacity: 0, duration: 0.6, stagger: 0.1
    });
});
