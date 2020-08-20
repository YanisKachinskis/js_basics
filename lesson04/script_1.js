'use strict';
/**
 * Функция принимает только целое число от 0 до 999 и возвращает обьект, где описаны разряды числа.
 * @param {number} number
 * @return {object} obj 
 */
function numberInObject (number) {
    if (!Number.isInteger(number) || (number <= 0) || (number >= 999)){
        console.log('Вы ввели некорректные данные. Читайте описание функции.')
        return {};
    } else {
    let obj = {
        units: (number % 10),
        tens: Math.floor((number%100)/10),
        hundereds: Math.floor(number/100)
    };
    return obj;
    }
}

console.log(numberInObject(+prompt('Введите число: ')));