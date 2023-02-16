"use strict";
const menuButton = document.querySelector('.menu-btn');
const exitButton = document.querySelector('.exit-btn');
const navBar = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navBar.classList.add('update');
})

exitButton.addEventListener('click', () => {
    navBar.classList.remove('update');
})