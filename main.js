let hamburgerIcon = document.querySelector(".header__hamburgerIcon");
let closingIcon = document.querySelector(".header__closingIcon");

let textPath = document.querySelector(".logoIcon__textPath");
let bookmarkInner = document.querySelector(".logoIcon__bookmarkInner");
let logoCircle = document.querySelector("circle");

let nav = document.querySelector("nav");
let mobileTwitterIcon = document.querySelector(".nav__twitterIcon");

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
});
window.addEventListener("resize", () => {
  if(window.innerWidth <= 768){
    nav.setAttribute("inert", true);
  }
  else{
    setNavInactive();
    nav.removeAttribute("inert");
  }
});