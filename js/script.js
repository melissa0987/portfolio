 
document.addEventListener("DOMContentLoaded", () => {

  /* ── SCROLL REVEAL ──────────────────────────────────────── */
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.add("visible");
        revealIO.unobserve(target);
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(el => revealIO.observe(el));


  /* ── PARTICLES ──────────────────────────────────────────── */
    const canvas = document.getElementById("particles");
    if (canvas) {
    const ctx = canvas.getContext("2d");

    let particles = [];
    const PARTICLE_DENSITY = 0.00007;
    const LINE_DIST = 110;

    function isLight() {
        return document.body.classList.contains("light");
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        generateParticles();
    }

    function generateParticles() {
        const count = Math.floor(
        canvas.width * canvas.height * PARTICLE_DENSITY
        );
        particles = [];

        for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedY: Math.random() * 0.4 + 0.2,
        });
        }
    }

    function drawParticles() {
        const rgb = isLight() ? "138,100,0" : "240,192,64";

        particles.forEach(p => {
        p.y -= p.speedY;
        if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},0.7)`;
        ctx.fill();
        });
    }

    function drawLines() {
        const rgb = isLight() ? "138,100,0" : "240,192,64";

        for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < LINE_DIST) {
            const alpha = 0.12 * (1 - dist / LINE_DIST);

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            }
        }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawParticles();
        drawLines();
        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animate();
    }


  /* ── THEME TOGGLE ───────────────────────────────────────── */
  const themeBtn  = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeIcon.className = "bi bi-moon";
  }

  themeBtn.addEventListener("click", () => {
    const isNowLight = document.body.classList.toggle("light");
    themeIcon.className = isNowLight ?   "bi bi-sun" : "bi bi-moon";
    localStorage.setItem("theme", isNowLight ? "light" : "dark");
  });


  /* ── TYPED EFFECT ───────────────────────────────────────── */
  const WORDS = ["Full-Stack", "Backend", "Web", "React"];
  const typedEl = document.getElementById("typed-word");

  let wIdx = 0, cIdx = 0, deleting = false;

  function typeStep() {
    const word = WORDS[wIdx];

    if (!deleting) {
      typedEl.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) {
        deleting = true;
        setTimeout(typeStep, 1700);
        return;
      }
    } else {
      typedEl.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        wIdx = (wIdx + 1) % WORDS.length;
      }
    }

    setTimeout(typeStep, deleting ? 52 : 88);
  }

  typeStep();


  /* ── COPYRIGHT YEAR ─────────────────────────────────────── */
  const yrEl = document.getElementById("yr");
  if (yrEl) yrEl.textContent = new Date().getFullYear();


   /* ── PHOTO CHANGE  ─────────────────────────────────────── */
  const portphoto = document.getElementById("port-photo");
  portphoto.addEventListener("mouseenter", (event) =>{
    event.target.src = "images/portforlio.png";
    event.target.alt = "portfolio-ghibli"
  });
  portphoto.addEventListener("mouseleave", (event) =>{
    event.target.src = "images/port-photo.png";
    event.target.alt = "portfolio-person"
  });

  
  /* ── CONTACT FORM ───────────────────────────────────────── */
  const form        = document.getElementById("contact-form");
  const statusEl    = document.getElementById("form-status");
  const submitLabel = document.getElementById("submit-label");
  const submitBtn   = form?.querySelector(".form-submit");

  function setStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className   = `form-status ${type}`;
  }

  function validateField(field) {
    const empty  = field.value.trim() === "";
    const badEmail = field.type === "email" && field.value.trim() !== "" &&
                     !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());

    field.classList.toggle("invalid", empty || badEmail);
    return !empty && !badEmail;
  }

  if (form) {
    // Live validation: clear error once the user starts fixing the field
    form.querySelectorAll("input, textarea").forEach(field => {
      field.addEventListener("input", () => {
        if (field.classList.contains("invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fields   = [...form.querySelectorAll("input, textarea")];
      const allValid = fields.map(validateField).every(Boolean);
      if (!allValid) {
        setStatus("Please fill in all fields correctly.", "error");
        return;
      }

 
      const ENDPOINT = "https://formspree.io/f/xpqjvdnw";

      submitBtn.disabled = true;
      submitLabel.textContent = "Sending…";
      setStatus("", "");

      try {
        const res = await fetch(ENDPOINT, {
          method:  "POST",
          headers: { "Accept": "application/json" },
          body:    new FormData(form),
        });

        if (res.ok) {
          setStatus("Message sent! I'll get back to you soon 🎉", "success");
          form.reset();
          fields.forEach(f => f.classList.remove("invalid"));
        } else {
          const data = await res.json().catch(() => ({}));
          setStatus(data.error || "Something went wrong. Try emailing me directly.", "error");
        }
      } catch {
        // Fallback: open default mail client so the message is never lost
        const name    = form.querySelector("#cf-name").value.trim();
        const message = form.querySelector("#cf-message").value.trim();
        const mailto  = `mailto:melissabangloy023@gmail.com?subject=Portfolio%20message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailto;
        setStatus("Opening your mail client as a fallback…", "error");
      } finally {
        submitBtn.disabled      = false;
        submitLabel.textContent = "Send Message";
      }
    });
  }

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".modal-close");

  document.querySelectorAll(".proj-img img").forEach(img => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });


});