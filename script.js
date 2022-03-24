"use strict";

window.addEventListener("load", pageLoaded);

function pageLoaded() {
  console.log("DOM and page is fully loaded");
  document.querySelector("#menu_btn").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");

  document.querySelector("#menu").classList.toggle("hidden");

  let menuHidden = document.querySelector("#menu").classList.contains("hidden");

  if (menuHidden == true) {
    document.querySelector("#menu_btn").textContent = "☰";
  } else {
    document.querySelector("#menu_btn").textContent = "✕";
  }
}

// // ----------- GSAP SCROLL TRIGGER
// // keep at bottom
// ScrollTrigger.create({
//   trigger: ".sticky-today",
//   start: "top bottom-=150",
//   endTrigger: ".today-content",
//   end: "top bottom-=75",
//   pin: true,
//   pinSpacing: false,
// });

// // keep x on top of the page
// ScrollTrigger.create({
//   trigger: ".sticky-today",
//   start: "top top+=75",
//   endTrigger: "html",
//   end: "top bottom",
//   pin: true,
//   pinSpacing: false,
// });

// // keep the next thing at bottom
// ScrollTrigger.create({
//   trigger: ".sticky-tomorrow",
//   start: "top bottom-=75",
//   endTrigger: ".tomorrow-content",
//   end: "bottom bottom-=75",
//   pin: true,
//   pinSpacing: false,
// });

// // keep at top
// ScrollTrigger.create({
//   trigger: ".sticky-tomorrow",
//   start: "top top+=150",
//   endTrigger: "html",
//   end: "bottom bottom",
//   pin: true,
//   pinSpacing: false,
// });
