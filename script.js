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
