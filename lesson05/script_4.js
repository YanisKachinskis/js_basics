'use strict';

let buttons = document.querySelectorAll(".more");

buttons.forEach(function(button){
    let parent = button.parentNode; 
    let img = parent.querySelector('.image');
    let desc = parent.querySelector('.description');
    button.addEventListener('click', function (){
        img.classList.toggle('hidden');
        desc.classList.toggle('hidden');
        if (button.textContent === 'Подробнее') {
            button.textContent = 'Отмена';
        } else {
            button.textContent = 'Подробнее';
        };
    });
});

