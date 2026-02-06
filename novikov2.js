// 1. let x; Выведите typeof x.
let x;
console.log(typeof x); // "undefined"

// 2. Выведите typeof 10 и typeof "10".
console.log(typeof 10); // "number"
console.log(typeof "10"); // "string"

// 3. Выведите typeof true и typeof false.
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"

// 4. Что выведет typeof null? (ответ словом | текстом)
// Ответ: "object" (это известная ошибка/особенность JavaScript)

// 5. Что выведет: "15" + 1 ?
console.log("15" + 1); // "151" (конкатенация строк)

// 6. Что выведет: "12" - 1 ?
console.log("12" - 1); // 11 (преобразование строки в число и вычитание)

// 7. Что выведет: Boolean("") ?
console.log(Boolean("")); // false (пустая строка - falsy значение)

// 8. Что выведет: Boolean(" ") ?
console.log(Boolean(" ")); // true (непустая строка, даже с пробелом - truthy)

// 9. Преобразуйте " 13 " в число (одной строкой).
console.log(Number(" 13 ")); // 13
// или
console.log(+" 13 "); // 13
// или
console.log(parseInt(" 13 ")); // 13

// 10. Напишите функцию isNumber(v), чтобы возвращало true только для чисел и false для NaN.
function isNumber(v) {
    return typeof v === 'number' && !isNaN(v);
}

// Тесты для функции isNumber:
console.log(isNumber(42)); // true
console.log(isNumber(3.14)); // true
console.log(isNumber(-10)); // true
console.log(isNumber(0)); // true
console.log(isNumber(NaN)); // false
console.log(isNumber("42")); // false (это строка, не число)
console.log(isNumber(true)); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false