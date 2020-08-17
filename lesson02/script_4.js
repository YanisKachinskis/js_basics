"use strict";
/**
 * Функция принимает два числа и возвращет их сумму.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sum (a, b) {
    return a + b;
} 

/**
 * Функция принимает два числа и возвращет их разность.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sub (a, b) {
    return a - b;
} 

/**
 * Функция принимает два числа и возвращет их произведение.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function mul (a, b) {
    return a * b;
} 

/**
 * Функция принимает два числа и возвращет их частное.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function div (a, b) {
    return a / b;
} 

alert(sum(8, 4));
alert(sub(8, 4));
alert(mul(8, 4));
alert(div(8, 4));