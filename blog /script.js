const blogs = {
  ai: {
    title: "AI / ML Engineer Roadmap",
    content:
      "AI & ML engineers build intelligent systems using Python, data, algorithms and real-world models Used.",
    focus: ["Python", "Math & Stats", "Projects", "Internships"],
  },
  data: {
    title: "Data Analyst Career Guide",
    content:
      "Data analysts turn raw data into insights using SQL, Excel, Python and visualization tools.",
    focus: ["SQL", "Excel", "Dashboards", "Business Thinking"],
  },
  fullstack: {
    title: "Full Stack Developer Path",
    content:
      "Full stack developers build complete applications covering frontend and backend.",
    focus: ["HTML/CSS/JS", "Backend", "Databases", "Projects"],
  },
  python: {
    title: "Python Developer Journey",
    content:
      "Python developers work on automation, backend, scripting and data processing.",
    focus: ["Core Python", "Automation", "APIs", "Practice"],
  },
  devops: {
    title: "DevOps Engineer Guide",
    content:
      "DevOps engineers automate deployments and manage cloud infrastructure.",
    focus: ["Linux", "CI/CD", "Cloud", "Monitoring"],
  },
};

function openBlog(id) {
  localStorage.setItem("blog", JSON.stringify(blogs[id]));
  window.location.href = "blog.html";
}
/* ===== CUSTOM CURSOR ===== */
const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  blur.style.left = e.clientX + "px";
  blur.style.top = e.clientY + "px";
});

/* ===== PARTICLES SYSTEM (LIGHTWEIGHT) ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(127,90,240,.6)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  nav.style.transform = window.scrollY > 100 ? "scale(.95)" : "scale(1)";
});
