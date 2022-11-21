"use strict";

const buttonMenu = document.querySelector(".header-inter__icon");
const navToggle = document.getElementById("nav");

buttonMenu.addEventListener("click", ()=>{
    navToggle.classList.toggle("header-inter__nav-toggle");
    if (buttonMenu.textContent == "menu") buttonMenu.textContent = "close";
    else buttonMenu.textContent = "menu";
})





































