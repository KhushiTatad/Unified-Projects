// Smooth Scrolling & Nav
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".chapter").forEach((ch) => observer.observe(ch));

// Custom Cursor
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor.follower");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  follower.style.left = e.clientX + "px";
  follower.style.top = e.clientY + "px";
});

// Hover Effects
document.querySelectorAll("a, .skill, .stat, .project-card").forEach((el) => {
  el.addEventListener(
    "mouseenter",
    () => (cursor.style.transform = "scale(1.5)")
  );
  el.addEventListener(
    "mouseleave",
    () => (cursor.style.transform = "scale(1)")
  );
});

// Particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: Math.random() * 0.5 + 0.5,
    rot: Math.random() * 360,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(105,117,101,${
      0.4 + Math.sin(Date.now() * 0.001 + p.x) * 0.2
    })`;
    ctx.fill();

    p.x += p.vx;
    p.y -= p.vy;
    if (p.y < -10) p.y = canvas.height + 10;
    p.rot += 1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Page Load Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
