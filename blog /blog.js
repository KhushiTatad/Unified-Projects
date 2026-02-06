const blog = JSON.parse(localStorage.getItem("blog"));

document.getElementById("title").innerText = blog.title;

document.getElementById("content").innerHTML = `
  <h2>Introduction</h2>
  <p>
    ${blog.content}
    This career path is one of the most in-demand roles in the tech industry today.
    It offers strong growth, global opportunities, and high impact work.
  </p>

  <h2>Why Choose This Career?</h2>
  <p>
    Companies are constantly searching for professionals who can solve real-world
    problems using technology. This role blends creativity, logic, and execution.
  </p>

  <h2>Core Skills Required</h2>
  <ul>
    ${blog.focus.map((skill) => `<li>${skill}</li>`).join("")}
  </ul>

  <h2>Learning Path</h2>
  <p>
    Start with fundamentals, practice daily, and build real projects.
    Avoid tutorial overload — focus on understanding and applying concepts.
  </p>

  <h2>Projects & Internships</h2>
  <p>
    Recruiters value experience more than certificates.
    Build portfolio projects, contribute to open source, and apply consistently.
  </p>

  <h2>Career Opportunities</h2>
  <p>
    With the right skill set, you can work in startups, product companies,
    or as a freelancer or remote engineer.
  </p>

  <h2>Final Thoughts</h2>
  <p>
    Success in this field requires patience, consistency, and curiosity.
    Learn deeply, build publicly, and keep improving.
  </p>
`;

/* Reading Progress Bar */
window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const progress =
    (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
  document.querySelector(".progress").style.width = progress + "%";
});
