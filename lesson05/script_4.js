'use strict';

let buttons = document.querySelectorAll(".more");


/*сделал смену картинки на текст, НЕ СЛОМАТЬ БЫ*/

buttons.forEach(function(button){
    let parent = button.parentNode; //.product
    //console.log (parent.querySelector('.name'))
    let img = parent.querySelector('.image');
    let desc = parent.querySelector('.description');
    button.addEventListener('click', function (){
        img.classList.add('hidden');
        desc.classList.remove('hidden');
    });
    
});

