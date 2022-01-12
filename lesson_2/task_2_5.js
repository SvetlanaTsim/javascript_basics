// 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

"use strict";

/**
 * Эта функция выполняет арифметические операции над переданными параметрами
 * @param {number} arg1 - первое число
 * @param {number} arg2 - второе число 
 * @param {string} operation - арифметическая операция, принимаются строки вида '+', '-', '/', '*', 
 * иначе возвращает undefined
 * @returns {number} - результат арифметической операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return difference(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        default:
            return;
    }
}

console.log(mathOperation(12, 4, '*'));
