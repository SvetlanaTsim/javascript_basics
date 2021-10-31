/* 3 Вывести в консоль значения выражений и объяснить почему получились такие значения
используя комментарии к каждому выражению:
10 + 10 + "10";
10 + "10" + 10;
10 + 10 + +"10"; (обратите внимание на пробелы, пишите также)
10 / -"";
10 / +"2,5"; (да здесь запятая, это не опечатка)
Объяснения пишите в таком формате:
1 4 умножаем на 2 получаем 8
2 3 минус 8 получаем -5
3 -5 присваиваем в переменную result
4 с помощью console.log выводим result в консоль
let result = 3 - 4 * 2;
console.log(result);
*/
'use strict';
let firstEx;
firstEx = 10 + 10 + "10";
console.log(firstEx);
/*Ответ 2010. Это получилось так:
1. Числа 10 складываем с 10. Получаем 20.
2. Происходит конкатенация с "10"
3. 20 из п. 1 и "10" из п. 2 приводятся к строке и 'склеиваются'.
4. Получается '2010'*/
let secondEx;
secondEx = 10 + "10" + 10;
console.log(secondEx);
/*Ответ: 101010*. Получилось так:
1. Так как сложение выполняется слева направо, то первое число 10 попыталось суммироваться со строкой "10".
2. 10 и " 10" были приведены к строке.
3. Произошла конкатенация, склеивание строк. То есть, получилось "1010".
4. Дальше стока "1010" стала суммироваться с числом 10.
5. Аналогичным образом произошло приведение к строке числа 10.
6. Конкатенация "1010" и "10" дала строку "101010".
*/
console.log(10 + 10 + +"10");
/*Попробовала сделать без создания переменной.
Результат 30. Получилось так:
1. Числа 10 и 10 суммируются и дают 20.
2. Строка "10" с помощью унарного оператора "+" приводится к числу 10.
3. Число 10 прибаваляется к ранее получившемуся числу 20, что в сумме дает 30.
*/
//console.log(10 + 10 ++"10");
/*Ради интереса попробовала убрать пробел между + и +"10"/
Получилась ощибка Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
Думаю, это может быть связано с частью ++"10".
Насколько я знаю в JS переменная, например foo++, озаначает, что надо взять переменную foo и к ней
прибавить 1. Но "10" это не переменная и с ней так нельзя сделать. Поэтому возникает ошибка.
Закомментировала, чтобы код не ломался.
*/
console.log(10 / -"");
/* Ответ -Infinity. Почему так?
1. На сайте https://learn.javascript.ru/number сказано:
"Помните, что пустая строка интерпретируется как 0 во всех числовых функциях, включаяisFinite."
2. Как нам демонстрировали на видеоуроке, при делении числа на 0 получаем Infinity, при делении на
-0 получаем -Infinity.
*/
console.log(10 / +"2,5");
/*Ответ NaN.
1. С помощью унарного оператора "+" пытаемся привести строку "2,5" к числу.
2. Это не получается из-за запятой. Так как дробное число должно быть с точкой.
3. То есть вместо +"2,5" получается NaN. То есть not a number. Это не число.
4. При попытке деления числа 10 на NaN, также получаем NaN.*/