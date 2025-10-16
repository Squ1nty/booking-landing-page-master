let hamburgerIcon = document.querySelector(".header__hamburgerIcon");
let closingIcon = document.querySelector(".header__closingIcon");

let textPath = document.querySelector(".logoIcon__textPath");
let bookmarkInner = document.querySelector(".logoIcon__bookmarkInner");
let logoCircle = document.querySelector("circle");

let navs = document.querySelectorAll("nav");
let nav = navs[0];
let mobileTwitterIcon = document.querySelector(".nav__twitterIcon");

let featureTabs = document.querySelector(".main__featureTabs");
let allTabGroups = document.querySelectorAll(".group");
let defaultTab = allTabGroups[0];
let currentTabState = "";
let featureSlides = document.querySelectorAll(".featureTabs__tabContainers");
let featureImgs = document.querySelectorAll(".featureTabs__imgContainers");
let allMoreInfoBtns = document.querySelectorAll(".featureTabs__moreInfoBtn");
let heroMoreInfoBtns = [allMoreInfoBtns[0], allMoreInfoBtns[1]];
let accordionContainer = document.querySelector(".FAQ__accordionContainer");
let faqText;
let allFAQTexts = document.querySelectorAll(".FAQ__text");

let form = document.querySelector("form");
let errorSVG = document.querySelector(".footer__errorSVG");
let errorLabel = document.querySelector(".footer__errorLabel");
let input = document.querySelector("input");
let submitBtn = document.querySelector(".footer__submitBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(1);
  if(input.value === ""){
    console.log(3);
    errorSVG.removeAttribute("inert");
    errorSVG.style.display = "block";
    errorLabel.removeAttribute("inert");
    errorLabel.style.display = "block";
    input.classList.add("error");
    errorLabel.textContent = "Whoops, you haven't entered anything";
    errorLabel.style.backgroundColor = "var(--red-400)";
    return;
  }

  if(!input.checkValidity()){
    console.log(2);
    if(input.validity.typeMismatch){
      console.log(3);
      errorSVG.removeAttribute("inert");
      errorSVG.style.display = "block";
      errorLabel.removeAttribute("inert");
      errorLabel.style.display = "block";
      input.classList.add("error");
      errorLabel.textContent = "Whoops, make sure it's an email";
      errorLabel.style.backgroundColor = "var(--red-400)";
    }
  }
  else{
    console.log(4);
    errorSVG.style.display = "none";
    errorSVG.setAttribute("inert", true);
    input.classList.remove("error");

    input.classList.add("success");
    errorLabel.removeAttribute("inert");
    errorLabel.style.display = "block";
    errorLabel.textContent = "Submitted. Will be in contact soon!"
    errorLabel.style.backgroundColor = "rgb(103, 170, 91)";

    setTimeout(() => {
      input.classList.remove("success");
      errorLabel.style.display = "none";
      errorLabel.setAttribute("inert", true);
    }, 3000);
  }
});

function handleFAQ(e){
  faqText = e.querySelector(".FAQ__text");

  if(e.classList.contains("active")){
    e.classList.remove("active");
    faqText.setAttribute("inert", true);
  }
  else{
    e.classList.add("active");
    faqText.removeAttribute("inert");
  }
}
accordionContainer.addEventListener("click", (e) => {
  if(e.target.classList[0] === "faqGroup"){
    handleFAQ(e.target);
  }
  else if(e.target.parentNode.classList[0] === "faqGroup"){
    handleFAQ(e.target.parentNode);
  }
  else if(e.target.parentNode.parentNode.classList[0] === "faqGroup"){
    handleFAQ(e.target.parentNode.parentNode);
  }
});
accordionContainer.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    handleFAQ(e.target);
  }
});

function handleTabDisplay(){
  featureSlides.forEach((e) => {
    e.classList.remove("slide-in");
    e.setAttribute("inert", true);
  });
  featureImgs.forEach((e) => {
    e.classList.remove("slide-in");
  });
  if(currentTabState === "sb"){
    featureImgs[0].classList.add("slide-in");
    featureSlides[0].classList.add("slide-in");
    featureSlides[0].removeAttribute("inert");
  }
  else if(currentTabState === "ss"){
    featureImgs[1].classList.add("slide-in");
    featureSlides[1].classList.add("slide-in");
    featureSlides[1].removeAttribute("inert");
  }
  else if(currentTabState === "es"){
    featureImgs[2].classList.add("slide-in");
    featureSlides[2].classList.add("slide-in");
    featureSlides[2].removeAttribute("inert");
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
function handleFeatureTabInteraction(element){
  if(element.classList[1] === "sb" || element.classList[1] === "ss" || element.classList[1] === "es"){
    handleTabChange(element);
  }
  else if(element.parentElement.classList[1] === "sb" || element.parentElement.classList[1] === "ss" || element.parentElement.classList[1] === "es"){
    handleTabChange(element.parentElement);
  }
}
featureTabs.addEventListener("click", (e) => {
  handleFeatureTabInteraction(e.target)
});
featureTabs.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    handleFeatureTabInteraction(e.target);
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
    heroMoreInfoBtns.forEach((button) => {
      button.setAttribute("inert", true);
    });
  }
  allFAQTexts.forEach((e) => {
    e.setAttribute("inert", true);
  });
  handleTabChange(defaultTab);
});
window.addEventListener("resize", () => {
  if(window.innerWidth <= 768){
    nav.setAttribute("inert", true);
    heroMoreInfoBtns.forEach((button) => {
      button.setAttribute("inert", true);
    });
  }
  else{
    setNavInactive();
    nav.removeAttribute("inert");
    heroMoreInfoBtns.forEach((button) => {
      button.removeAttribute("inert");
    });
  }
  allFAQTexts.forEach((e) => {
    e.setAttribute("inert", true);
  });
  handleTabChange(defaultTab);
});