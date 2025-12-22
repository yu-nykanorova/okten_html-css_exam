"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const menu = document.getElementById("nav");
    const closeButton = document.getElementById("close-button");
    const burgerButton = document.getElementById("burger");

    burgerButton.addEventListener("click", function() {
        menu.classList.add("active");
        body.classList.add("no-scroll");
    });

    closeButton.addEventListener("click", function() {
        menu.classList.remove("active");
        body.classList.remove("no-scroll");
    })
})