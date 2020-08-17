"use strict";

let userMoney = prompt("Введите сумму, которую вы хотите положить в банк.")
let lastNumber = userMoney.slice(-1);
if (lastNumber == "1") {
    alert(`Ваша сумма в ${userMoney} рубль успешно зачислена.`);
} else if (lastNumber == "2" || lastNumber == "3"  || lastNumber == "3" || lastNumber == "4") {
    alert(`Ваша сумма в ${userMoney} рубля успешно зачислена.`);
} else if (lastNumber == "0" || lastNumber == "5" || lastNumber == "6" || lastNumber == "7" || lastNumber == "8" || lastNumber == "9") {
    alert(`Ваша сумма в ${userMoney} рублей успешно зачислена.`);
} else {
    alert('Вы ввели некоректную сумму.')
}


