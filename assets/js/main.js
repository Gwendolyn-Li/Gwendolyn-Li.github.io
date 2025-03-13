document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    const body = document.body;

    mobileMenuButton.addEventListener('click', function() {
        mobileMenuButton.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenuButton.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
        document.querySelectorAll('.abstract-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const abstract = toggle.nextElementSibling;
                const isVisible = abstract.style.display === 'block';
                abstract.style.display = isVisible ? 'none' : 'block';
                toggle.textContent = isVisible ? '[Show Abstract]' : '[Hide Abstract]';
            });
        });
});
