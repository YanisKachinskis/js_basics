'use strict';

function chess () {
    let mainDiv = document.createElement('div');
    let scr = document.querySelector('script');
    document.body.insertBefore(mainDiv, scr);
    mainDiv.classList.add('chess');
    let count = 8;
    let letters = 'HGFEDCBA';
    for (let i = 1; i < 10; i++) {
        let innerDiv = document.createElement('div');
        mainDiv.appendChild(innerDiv);
        innerDiv.classList.add('chess-tr');
        for (let j = 1; j < 10; j++) {
            let cellDiv = document.createElement('div');
            innerDiv.appendChild(cellDiv);
            if (i == 9 && j < 9) {
                cellDiv.classList.add('letter');
                cellDiv.textContent = letters[j - 1];
            } else if (j < 9 && i < 9) {
                cellDiv.classList.add('cell');
            } else {
                if (count >= 1) {
                   cellDiv.classList.add('number');
                   cellDiv.textContent = count--;
                } else {cellDiv.classList.add('corner');
                }; 
            };
        
        };
        
    };
}

chess();