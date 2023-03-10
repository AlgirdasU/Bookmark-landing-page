"use strict";

const emailInput = document.querySelector(".contact__email");
const contactContainer = document.querySelector(".contact__container");
const tabsList = document.querySelector(".features__list");
const tabsBtn = document.querySelectorAll(".features__tab-item");
const featuresContent = document.querySelectorAll(".features__container");
const btnEl = document.querySelectorAll(".menu-btn");
const headerEl = document.querySelector(".header");

btnEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });
});

// toggle tabs
function switchTabs(e) {
  const clickedTabId = e.target.closest("[data-id]").dataset.id;
  const clickedTab = e.target.closest("[data-id]");

  if (clickedTabId) {
    // Get all TABS elements with class=".features__tab-item" and remove the class "active"
    tabsBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    // Get all content elements with class=".features__container" and remove the class "active"
    featuresContent.forEach((content) => {
      content.classList.remove("active");
    });
    // Add "active" class to the current TAB button, and add an "active" class to the content on .features__container class
    clickedTab.classList.add("active");
    const featuresContentElement = document.getElementById(clickedTabId);
    featuresContentElement.classList.add("active");
  }
}
// Click on tabs container and send event = e parameter to function "switchTabs"
tabsList.addEventListener("click", (e) => {
  switchTabs(e);
});

// Accordion
document.addEventListener("click", (e) => {
  const clickedAccordionBtn = e.target.closest("[data-btn]").dataset.btn;
  if (!clickedAccordionBtn) return;
  const accorItem = document.getElementById(clickedAccordionBtn);
  accorItem.classList.toggle("active");
});

// verify email
emailInput.addEventListener("input", () => {
  emailInput.value &&
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)
    ? contactContainer.classList.remove("active")
    : contactContainer.classList.add("active");
});

// SCROLL-UP-BTN
// Bottom right of the page is hidden until the user has scrolled down 300px
const scrollUpBtn = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  // 1. If window is scrolled down 300px button will be visible
  window.pageYOffset > 300
    ? (scrollUpBtn.style.visibility = "visible")
    : // 2. If not is hidden
      (scrollUpBtn.style.visibility = "hidden");
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
