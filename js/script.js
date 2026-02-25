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

    // Magical floating particles (global background)

    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    let particles = [];
    const PARTICLE_DENSITY = 0.00008;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
        generateParticles();
    }

    function generateParticles() {
        const count = Math.floor(window.innerWidth * window.innerHeight * PARTICLE_DENSITY);

        particles = [];

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2.5 + 0.5,
                speed: Math.random() * 0.6 + 0.2
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(255, 215, 0, 0.7)";

        particles.forEach(p => {
            p.y -= p.speed;

            if (p.y < 0) {
                p.y = canvas.height;
                p.x = Math.random() * canvas.width;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("load", resizeCanvas);

    resizeCanvas();
    animateParticles(); 

    // light-dark mode toogle 
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Set light mode as default
    document.body.classList.remove("dark-mode");
    themeIcon.classList.add("bi-sun"); // Sun icon for light mode

    // Toggle light/dark mode
    themeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            themeIcon.classList.remove("bi-moon"); //removes moon icon
            themeIcon.classList.add("bi-sun"); //adds sun icon
            console.log("Switched to light mode");
        } else {
            document.body.classList.add("dark-mode");
            themeIcon.classList.remove("bi-sun"); //removes sun icon
            themeIcon.classList.add("bi-moon"); //adds moon icon
            console.log("Switched to dark mode");
        }
    }); 


    // type effect -words 
    const words = ["Software", "Frontend", "FullStack", "Web", "React"];

    const wordColors = {
    Software: "#ffa640",
    Frontend: "#a9a5e0",
    FullStack: "#3c7723",
    Web: "#f86d4a",
    React: "#308ea8",
    };

    const typedWord = document.getElementById("typed-word");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
    const currentWord = words[wordIndex];
    const currentColor = wordColors[currentWord];

    typedWord.style.color = currentColor;

    if (!isDeleting) {
        typedWord.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typedWord.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();

    // change photo when hover
    const portphoto = document.getElementById("port-photo");
    portphoto.addEventListener("mouseenter", (event) =>{
        event.target.src = "images/port-photo.png";
        event.target.alt = "portfolio-person"
    });
    portphoto.addEventListener("mouseleave", (event) =>{
        event.target.src = "images/portforlio.png";
        event.target.alt = "portfolio-ghibli"
    });

})