// 1. Базовый вызов
function sayHello() {
    console.log("Hello, JS!");
}
// sayHello();

// 2. Параметры
function greet(name) {
    console.log(`Hello, ${name}`);
}
// greet("Alice");

// 3. Приветствие с проверкой
function greetWithCheck(name) {
    if (name) {
        return `Hello, ${name}`;
    } else {
        return "Hello, stranger";
    }
}
// console.log(greetWithCheck("Bob")); // Hello, Bob
// console.log(greetWithCheck()); // Hello, stranger

// 4. Возведение в квадрат
function square(x) {
    return x * x;
}
// console.log(square(5)); // 25

// 5. Сумма массива
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4])); // 10

// 6. Минимум из двух
function min(a, b) {
    return a < b ? a : b;
}
// console.log(min(10, 3)); // 3
// console.log(min(-5, 5)); // -5

// 7. Стрелочные функции
const double = (x) => x * 2;
// console.log(double(7)); // 14

// 8. Колбэк
function apply(fn, x) {
    return fn(x);
}
// console.log.apply(n => n + 1, 5); // 6
// console.log.apply(x => x * x, 4); // 16

// 9. Фильтр по длине слова
function filterByLength(words, minLen) {
    return words.filter(word => word.length > minLen);
}
// console.log(filterByLength(["hi", "hello", "world"], 3)); // ["hello", "world"]

// 10. Работа с массивом
function toUpperArray(arr) {
    return arr.map(str => str.toUpperCase());
}
// console.log(toUpperArray(["hello", "world"])); // ["HELLO", "WORLD"]