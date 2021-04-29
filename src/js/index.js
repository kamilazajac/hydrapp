import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const glassCounter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".button-add--js");
const buttonRemove = document.querySelector(".button-remove--js");

const key = new Date().toLocaleString().slice(0, 10);

let currentGlasses = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  currentGlasses = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentGlasses;

buttonAdd.addEventListener("click", () => {
  currentGlasses++;
  glassCounter.innerHTML = currentGlasses;
  localStorage.setItem(key, currentGlasses);
});

buttonRemove.addEventListener("click", () => {
  if (currentGlasses > 0) {
    currentGlasses--;
  }
  glassCounter.innerHTML = currentGlasses;
  localStorage.setItem(key, currentGlasses);
});
