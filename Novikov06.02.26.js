//1
const str = "JavaScript";
console.log(str.slice(4)); // "Script"
//2
const str = "report.pdf";
console.log(str.startsWith("rep")); // true
console.log(str.endsWith(".pdf")); // true
//3
const str = "I like cats";
console.log(str.replace("cats", "dogs")); // "I like dogs"
//4
const str = "apple,banana,orange,apple";
const arr = str.split(",");
const count = arr.filter(word => word === "apple").length;
console.log(count); // 2
//5
const str = "My phone number is 12345 and my code is 67890";
const numbers = str.split(" ").filter(word => !isNaN(parseInt(word)));
console.log(numbers); // ["12345", "67890"]

// Или с match и регулярным выражением:
console.log(str.match(/\d+/g)); // ["12345", "67890"]
//6
const str = "Hello World From JS";
const words = str.split(" ");
words[0] = words[0].toLowerCase();
console.log(words.join(" ")); // "hello World From JS"