'use strict';


let buttons = document.querySelectorAll(".buy");
let basketWindow = document.querySelector('.basket-window');

buttons.forEach(function(button) {
    let parent = button.parentNode;
    button.addEventListener('click', function(event) {
        let idPrd = event.target.dataset.id;
        let namePrd = event.target.dataset.name;
        let pricePrd = Number(event.target.dataset.price);
        basket.addPrd(idPrd, namePrd, pricePrd);
        
    })
});

let basketButton = document.querySelector('.basket');
let cleaner = document.querySelector('.cleaner');
basketButton.addEventListener('click', function (){
    cleaner.classList.toggle('hidden');
    basketWindow.classList.toggle('hidden');
})

cleaner.addEventListener('click', function () {
    basket.cleanAll();


})

let basket = {
    totalPrice: 0,
    count: 0,
    addPrd(idPrd, namePrd, pricePrd) {
        ++this.count;
        this.sum(pricePrd);
        basketWindow.insertAdjacentHTML("beforeend", `<tr class='productLine' data-id='${this.count}'>
                                                        <td>${idPrd}</td>
                                                        <td>${namePrd}</td>
                                                        <td>${pricePrd}</td>
                                                        <td>1</td>
                                                        <td><button class='removeBtn' data-id='${this.count}'>X</button></td>
                                                    </tr>`);
        let removeButtons = document.querySelectorAll(".removeBtn");
        removeButtons.forEach(function(removeButton){
            removeButton.addEventListener('click', function(event) {
            basket.removePrd(event);
        });
        console.log(basket);
})
    },

    cleanAll() {
        basketWindow.innerHTML = `<table border='1' class='basket-window hidden'><tr>
                <td>ID</td>
                <td>Название</td>
                <td>Цена</td>
                <td>Колличество</td>
                <td class='total'></td>
            </tr></table>`;
        this.totalPrice = 0;
    },

    removePrd (event) {
        let productLines = document.querySelectorAll(".productLine");
        
        productLines.forEach(function(productLine) {
            if (productLine.dataset.id === event.target.dataset.id) {
                        basket.del(Number(productLine.childNodes[5].innerHTML));
                        productLine.remove();
                        
            };
            
        });
        
    },

    sum(price) {
        this.totalPrice += price;
        console.log(this.totalPrice);
        document.querySelector('.total').innerHTML = this.totalPrice;
        },

    del(price) {
        this.totalPrice -= price;
        console.log(this.totalPrice);
        document.querySelector('.total').innerHTML = this.totalPrice;
        },
    
};
