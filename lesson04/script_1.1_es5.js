//es5
'use strict';

function Product (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25);
}

let prod = new Product('товар1', 300);

console.log(prod.name);
console.log(prod.price);
prod.make25PercentDiscount();
console.log(prod.price);