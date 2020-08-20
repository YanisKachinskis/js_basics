//es6
'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

let prod = new Product('товар2', 500);

console.log(prod.name);
console.log(prod.price);
prod.make25PercentDiscount();
console.log(prod.price);