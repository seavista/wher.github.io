/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function() {
    // IntersectionObserver for scroll animations
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-section, .features-section, .contact-section').forEach(section => {
        observer.observe(section);
    });

    // Parallax effect
    window.addEventListener('scroll', function() {
        let scrolled = window.pageYOffset;
        document.querySelector('.bg-video').style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    });
});
