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

// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Show selected section
    const target = tab.getAttribute("data-tab");
    sections.forEach((section) => {
      if (section.id === target) {
        section.classList.add("show", "fade-up");
      } else {
        section.classList.remove("show", "fade-up");
      }
    });
  });
});
