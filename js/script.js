document.addEventListener("DOMContentLoaded", function () {
    // Scroll reveal animation
    const reveals = document.querySelectorAll(".reveal");

    window.addEventListener("scroll", () => {
        reveals.forEach(section => {
            const windowHeight = window.innerHeight;
            const elementTop = section.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                section.classList.add("active");
            }
        });
    });

    // Magical floating particles
    const particle = document.getElementById("particles");
    const ctx = particle.getContext("2d");

    particle.width = window.innerWidth;
    particle.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * particle.width,
            y: Math.random() * particle.height,
            size: Math.random() * 3,
            speedY: Math.random() * 1 + 0.5
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, particle.width, particle.height);

        ctx.fillStyle = "rgba(255, 215, 0, 0.7)";

        particles.forEach(p => {
            p.y -= p.speedY;
            if (p.y < 0) p.y = particle.height;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener("resize", () => {
        particle.width = window.innerWidth;
        particle.height = window.innerHeight;
    });

})