// 1. Проверка числа
let n = -5;
if (n > 0) {
    console.log("positive");
} else if (n < 0) {
    console.log("negative");
} else {
    console.log("zero");
}
// negative

// 2. Минимум из двух
let a = 12;
let b = 7;
console.log(a < b ? a : b); // 7
// или с Math.min:
console.log(Math.min(a, b)); // 7

// 3. Делится ли на 3
n = 15;
if (n % 3 === 0) {
    console.log("yes");
} else {
    console.log("no");
}
// yes

// 4. Сумма чисел от 1 до N
let N = 7;
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log(sum); // 28

// 5. Все нечётные числа
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// 1, 3, 5, 7, 9, 11, 13, 15

// 6. Количество чётных
let evenCount = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}
console.log(evenCount); // 10

// 7. Найти букву в строке
let str = "banana";
let countA = 0;
for (let char of str) {
    if (char === "a") {
        countA++;
    }
}
console.log(countA); // 3

// 8. Переворот строки
str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // "olleh"

// 9. Таблица умножения на число
let num = 4;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
// 4*1=4, 4*2=8, ..., 4*10=40

// 10. Простая «пирамидка»
let pyramid = "";
for (let i = 1; i <= 4; i++) {
    pyramid = "*".repeat(i);
    console.log(pyramid);
}
// или с циклом:
for (let i = 1; i <= 4; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}

// 11. Сумма чисел, кратных 3 или 5
N = 30;
let sumMultiples = 0;
for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sumMultiples += i;
    }
}
console.log(sumMultiples); // 293

// 12. Второе максимальное из трёх (условия)
a = 9;
b = 17;
c = 17;

// Находим максимум и минимум
let max1 = Math.max(a, b, c);
let min1 = Math.min(a, b, c);
let secondMax;

// Ищем второе максимальное
if (a !== max1 && a !== min1) {
    secondMax = a;
} else if (b !== max1 && b !== min1) {
    secondMax = b;
} else if (c !== max1 && c !== min1) {
    secondMax = c;
} else {
    // Если все числа равны или два максимальных повторяются
    secondMax = max1;
}
console.log(secondMax); // 17

// 13. Количество гласных в строке
str = "education";
let vowelsCount = 0;
const vowels = "aeiouAEIOU";

for (let char of str) {
    if (vowels.includes(char)) {
        vowelsCount++;
    }
}
console.log(vowelsCount); // 5 (e, u, a, i, o)

// 14. Проверка палиндрома
str = "level";
let isPalindrome = true;
for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome ? "yes" : "no"); // yes

// 15. Простые числа в диапазоне
console.log("Простые числа от 2 до 30:");
for (let i = 2; i <= 30; i++) {
    let isPrime = true;
    
    // Проверяем делители от 2 до квадратного корня из i
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(i);
    }
}
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29