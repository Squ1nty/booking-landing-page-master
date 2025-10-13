let hamburgerIcon = document.querySelector(".header__hamburgerIcon");
let closingIcon = document.querySelector(".header__closingIcon");

let textPath = document.querySelector(".logoIcon__textPath");
let bookmarkInner = document.querySelector(".logoIcon__bookmarkInner");
let logoCircle = document.querySelector("circle");

let nav = document.querySelector("nav");
let mobileTwitterIcon = document.querySelector(".nav__twitterIcon");

let featureTabs = document.querySelector(".main__featureTabs");
let allTabGroups = document.querySelectorAll(".group");
let defaultTab = allTabGroups[0];
let currentTabState = "";
let featureImg = document.querySelector(".main__featureImg");

function handleTabDisplay(){
  if(currentTabState === "sb"){
    featureImg.setAttribute("src", "./images/illustration-features-tab-1.svg");
  }
  else if(currentTabState === "ss"){
    featureImg.setAttribute("src", "./images/illustration-features-tab-2.svg");
  }
  else if(currentTabState === "es"){
    featureImg.setAttribute("src", "./images/illustration-features-tab-3.svg");
  }
}
function resetFeatureTabs(){
  allTabGroups.forEach((e) => {
    e.classList.remove("active");
  });
}
function handleTabChange(featureTab){
  resetFeatureTabs();

  featureTab.classList.add("active");
  currentTabState = featureTab.classList[1];

  handleTabDisplay();
}

featureTabs.addEventListener("click", (e) => {
  if(e.target.classList[1] === "sb" || e.target.classList[1] === "ss" || e.target.classList[1] === "es"){
    handleTabChange(e.target);
  }
  else if(e.target.parentElement.classList[1] === "sb" || e.target.parentElement.classList[1] === "ss" || e.target.parentElement.classList[1] === "es"){
    handleTabChange(e.target.parentElement);
  }
});

mobileTwitterIcon.addEventListener("keydown", (e) => {
  if(nav.classList.contains("active") && e.key == "Tab"){
    e.preventDefault();
    closingIcon.focus();
  }
});

function setNavActive(){
  // Sets closing as active, hides hamburger
  hamburgerIcon.style.display = "none";
  hamburgerIcon.setAttribute("inert", true);
  closingIcon.style.display = "block";
  closingIcon.removeAttribute("inert");
  closingIcon.focus();

  // Adds active states to logo to allow for color change
  textPath.classList.add("active");
  bookmarkInner.classList.add("active");
  logoCircle.classList.add("active");
  
  // Finally, set nav component as active
  nav.removeAttribute("inert");
  nav.classList.add("active");
}
hamburgerIcon.addEventListener("click", () => {
  setNavActive();
});
hamburgerIcon.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    setNavActive();
  }
});

function setNavInactive(){
  closingIcon.style.display = "none";
  closingIcon.setAttribute("inert", true);
  hamburgerIcon.style.display = "block";
  hamburgerIcon.removeAttribute("inert");
  hamburgerIcon.focus();

  textPath.classList.remove("active");
  bookmarkInner.classList.remove("active");
  logoCircle.classList.remove("active");

  nav.setAttribute("inert", true);
  nav.classList.remove("active");
}
closingIcon.addEventListener("click", () => {
  setNavInactive();
});
closingIcon.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    setNavInactive();
  }
});

window.addEventListener("load", () => {
  if(window.innerWidth <= 768){
    nav.setAttribute("inert", true);
  }
  handleTabChange(defaultTab);
});
window.addEventListener("resize", () => {
  if(window.innerWidth <= 768){
    nav.setAttribute("inert", true);
  }
  else{
    setNavInactive();
    nav.removeAttribute("inert");
  }
  handleTabChange(defaultTab);
});