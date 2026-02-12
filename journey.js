/* ── Scroll-reveal: fade in items as they enter viewport ── */
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => observer.observe(item));

/* ── Dot click → navigate to project page ── */
const dots = document.querySelectorAll('.timeline-dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const link = dot.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});
