'use strict';

let modalWindow = document.querySelector('.window');
let openButton = document.querySelector('.open');
let closeButton = document.querySelector('.close');

openButton.addEventListener('click', openWindow);
closeButton.addEventListener('click', closeWindow);

function openWindow () {
    modalWindow.classList.remove('hidden');
};

function closeWindow () {
    modalWindow.classList.add('hidden');
};