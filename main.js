document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.navbar-toggler');
    const mainNav = document.querySelector('.navbar-collapse');
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });

    // Auto-close menu on link click (mobile only)
    mainNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 700) {
                mainNav.classList.remove('open');
            }
        });
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Highlight skill cards one by one in marquee, synced with scroll speed
    const skillCards = document.querySelectorAll('.skills-marquee .skill-card');
    let current = 0;
    const marqueeDuration = 22000; // 22s in ms, matches CSS animation
    const highlightInterval = marqueeDuration / skillCards.length;

    function highlightSkill() {
        skillCards.forEach(card => card.classList.remove('highlight'));
        skillCards[current].classList.add('highlight');
        current = (current + 1) % skillCards.length;
    }
    highlightSkill();
    setInterval(highlightSkill, highlightInterval);
});