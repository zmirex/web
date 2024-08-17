document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.glass-card');

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Efecto de parallax suave
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionX = (rect.left + rect.width / 2) / window.innerWidth;
            const sectionY = (rect.top + rect.height / 2) / window.innerHeight;

            const offsetX = (mouseX - sectionX) * 20;
            const offsetY = (mouseY - sectionY) * 20;

            section.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
});