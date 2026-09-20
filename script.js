/**
 * ==============================================================================
 * Gokul M - Portfolio Website JavaScript
 * Pure Vanilla JS (No dependencies, no build step)
 * ==============================================================================
 */

// 1. Central SITE configuration object
const SITE = {
  name: "Gokul M",
  title: "B.Sc Computer Science Student",
  college: "VETIAS College",
  phone: "6379964841",
  email: "gokulrm2007@gmail.com",
  linkedin: "https://www.linkedin.com/in/gokul-m-57817635a/",
  github: "https://github.com/gokulrm2007-cpu"
};

// 2. Initialize application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initSocialAndContactLinks();
  initMobileNavigation();
  initActiveNavLinkHighlight();
  initContactForm();
});

/**
 * Ensures all LinkedIn, GitHub, Email, and Phone links across hero,
 * contact section, footer, and navigation use the canonical SITE values,
 * open in new tabs where applicable, and have rel="noopener noreferrer".
 */
function initSocialAndContactLinks() {
  // LinkedIn links
  const linkedinElements = document.querySelectorAll('[data-link="linkedin"], a[href*="linkedin.com"]');
  linkedinElements.forEach(el => {
    el.setAttribute("href", SITE.linkedin);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // GitHub links
  const githubElements = document.querySelectorAll('[data-link="github"], a[href*="github.com"]');
  githubElements.forEach(el => {
    el.setAttribute("href", SITE.github);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Email links
  const emailElements = document.querySelectorAll('[data-link="email"], a[href^="mailto:"]');
  emailElements.forEach(el => {
    el.setAttribute("href", `mailto:${SITE.email}`);
  });

  // Phone / Call links
  const phoneElements = document.querySelectorAll('[data-link="phone"], a[href^="tel:"]');
  phoneElements.forEach(el => {
    el.setAttribute("href", `tel:${SITE.phone}`);
  });
}

/**
 * Mobile navigation toggle drawer handler
 */
function initMobileNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking any nav link
  const links = navLinks.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/**
 * Highlights active navigation link based on scroll position
 */
function initActiveNavLinkHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}

/**
 * Contact Form submission helper
 */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("formName");
    const emailInput = document.getElementById("formEmail");
    const messageInput = document.getElementById("formMessage");
    const formStatus = document.getElementById("formStatus");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "#dc2626";
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Open user's default email client with prepopulated message
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

    if (formStatus) {
      formStatus.textContent = "Opening your email client to send message...";
      formStatus.style.color = "#2563eb";
    }

    contactForm.reset();
  });
}
