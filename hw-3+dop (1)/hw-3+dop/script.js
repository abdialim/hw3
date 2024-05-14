// Удвоение числа:
// Напишите функцию, которая принимает число в качестве аргумента и возвращает его удвоенное значение
function num(number) {
    return number * 2;
}

let number = 5;
let result = num(number);

console.log(result);

// Проверка на четность:
// Напишите функцию, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
function num2(number) {
    return number % 2 === 0;
}

let number2 = 5;
let num2Number = num2(number);

console.log(num2Number);

// Поиск максимального числа:
// Напишите функцию, которая принимает массив чисел и возвращает максимальное значение
function num3(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }
    let max = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    return max;
}

let numbers = [5, 3, 9, 2, 7];
let maxNumber = num3(numbers);

console.log( maxNumber);

// Проверка на палиндром:
// Напишите функцию, которая принимает строку и возвращает true, если она является палиндромом (читается одинаково как слева направо, так и справа налево), и false в противном случае.
function str2(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    return str === str.split('').reverse().join('');
}

let str = "Hello World!";
let str3 = str2(str);
console.log(str3);



// Расчет среднего значения:
// Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает среднее значение
function num4(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length; 
}

let numbers2 = [5, 3, 9, 2, 7];
let str4 = num4(numbers);
console.log(str4);

