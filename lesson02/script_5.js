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

/**
 * Функция принимает 3 параметра: 2 числа и название действия над ними:
 * 'sum' - сумма, 'sub' - вычитание, 'mul' - умножение, 'div' - деление.  
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation
 * @returns {number} 
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return sum(arg1, arg2);
            break;
        case 'sub':
            return sub(arg1, arg2);
            break;    
        case 'mul':
            return mul(arg1, arg2);
            break;
        case 'div':
            return div(arg1, arg2);
            break;  
        default:
            return "Вы передали некоррктный параметр(ы). Читайте мануал.";       
            
    }
}

alert(mathOperation(8, 4, 'sum'));
alert(mathOperation(8, 4, 'sub'));
alert(mathOperation(8, 4, 'mul'));
alert(mathOperation(8, 4, 'div'));
alert(mathOperation(8, 4, 'hkj'));