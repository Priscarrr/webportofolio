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

// Tabs functionality
const tabs = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.getAttribute("data-tab");
    sections.forEach((sec) => {
      if (sec.id === target) {
        sec.classList.add("show", "fade-up");
      } else {
        sec.classList.remove("show", "fade-up");
      }
    });
  });
});
