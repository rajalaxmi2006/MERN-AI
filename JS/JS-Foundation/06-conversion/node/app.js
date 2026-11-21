// Inputs from terminal

// let age = 25;
let age = process.argv[2];
// let increase5 = process.argv[3];

// console.log(age + increase5); // 255

// console.log(typeof age); // string

let count = 14;
count = String(count);
console.log(typeof count);

// console.log(typeof Number("25")); // Explicit
// console.log(typeof String(25)); // Explicit
console.log(Number("code")); // NaN
console.log(Number("0")); // 0
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true));

console.log(String(true));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean(0n));

// false,0,-0,0n,"",null,undefined,NaN --> Falsy values

console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log(""); // empty string
console.log([]);
console.log({});

// Radix :

let num1 = "25.99";
console.log(parseInt(num1)); // From floating number to Integer
console.log(parseFloat(num1)); // 25.99

let num2 = "hello";
num2 = Number(num2);
console.log(num2);
console.log(Number.isNaN(num2));

// Implicit / Coercion
console.log(true + 1); // 1 + 1
console.log(false + 1); // 0 + 1
console.log(null === undefined);
