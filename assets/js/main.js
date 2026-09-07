document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    const body = document.body;

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = mobileMenuButton.classList.toggle('active');
            mobileMenu.classList.toggle('active', isOpen);
            body.classList.toggle('menu-open', isOpen);
            mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenuButton.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.querySelectorAll('.abstract-toggle').forEach(toggle => {
        const abstractId = toggle.getAttribute('aria-controls');
        const abstract = abstractId ? document.getElementById(abstractId) : toggle.nextElementSibling;

        if (!abstract) return;

        toggle.addEventListener('click', () => {
            const isOpening = abstract.hidden;
            abstract.hidden = !isOpening;
            toggle.setAttribute('aria-expanded', String(isOpening));
            toggle.textContent = isOpening ? 'Hide abstract' : 'Show abstract';
        });
    });
});
