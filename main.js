// Typing effect
const text = ["Front-End Developer", "Game Developer", "Web Enthusiast"];
let i = 0,
  j = 0;
const speed = 120;
const typingElement = document.querySelector(".typing");
function typeEffect() {
  if (j < text[i].length) {
    typingElement.innerHTML += text[i].charAt(j);
    j++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      j = 0;
      i = (i + 1) % text.length;
      typeEffect();
    }, 1500);
  }
}
typeEffect();

// Fade-up animation
const faders = document.querySelectorAll(".fade-up");
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// Tab switching
const tabs = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => tab.blur(), 0);
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.tab);
    sections.forEach((sec) => sec.classList.remove("show"));
    target.classList.add("show");
  });
});
