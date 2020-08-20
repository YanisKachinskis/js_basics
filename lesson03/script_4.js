"use strict";

const products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
]

products.filter(function (product) {
    product.price = Math.round(product.price * 1.15);
})
console.log(products);