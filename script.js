// JavaScript for Portfolio Website

// Toggle menu icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon?.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// GitHub, LinkedIn, Instagram icon handlers
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("github-icon")
    ?.addEventListener("click", function () {
      window.open("https://github.com/deepu2498", "_blank");
    });

  document
    .getElementById("linkedin-icon")
    ?.addEventListener("click", function () {
      window.open("https://www.linkedin.com/in/deepusingh046", "_blank");
    });

  document
    .getElementById("instagram-icon")
    ?.addEventListener("click", function () {
      window.open("https://instagram.com/singh_deepu2498", "_blank");
    });

  // Add icons to skill bars
  const skillIcons = {
    html: "fab fa-html5",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    cpp: "fas fa-code",
    c: "fas fa-terminal",
  };

  document.querySelectorAll(".skill-list li").forEach((li) => {
    const skillText = li.querySelector("h3").textContent.trim().toLowerCase();
    const iconClass = skillIcons[skillText];
    if (iconClass) {
      const icon = document.createElement("i");
      icon.className = iconClass;
      icon.style.marginRight = "8px";
      li.querySelector("h3").prepend(icon);
    }
  });
});

// Scroll active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let current = "";

  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      current = id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  // Sticky header
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Close menu on scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Smooth scroll for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

// Optional: ScrollReveal animations
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".home-content, .heading", {
    origin: "top",
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal(".image img, .edu-box, .project-box, .contact form", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".home-content h1, .skill-list", { origin: "left" });
  ScrollReveal().reveal(".home-content h3, .home-content p", {
    origin: "right",
  });
}

// Resume download button (if element exists)
document
  .getElementById("download-resume")
  ?.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "myResume.pdf";
    link.download = "Deepu_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });





  
// Optional: Dark mode toggle
/*
const darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('fa-sun');
  darkModeIcon.classList.toggle('fa-moon');
});
*/
