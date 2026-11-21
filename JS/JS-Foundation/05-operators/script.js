//? A product costs 2000/-. There is a 10% discount and 100/- delivery charges. How do you calculate the final price?

const price = 2000; // stored and initialized
const discount = 10;
const delivery = 100;

const discountAmount = (price * discount) / 100;
const finalPrice = price - discountAmount + delivery;

console.log(finalPrice);

// Operators are the building blocks that allow javascript to calculate, compare and make decisions.

// Expression :
// An expression is code that produces a value.
// Ex: (10 + 20) --> 30


// Mental Model :

/*
Expression 
  |
Evaluation
  |
Value
*/

// Operator:
// An operator performs an operation.

// Ex: 10+20
// 10 : operand
// + : operator
// 20 : operand

//1. Arithmetic
//2. Assignment
//3. Comparison
//4. Logical
//5. Unary
//6. Ternary

//1. Arithmetic :
// const a = 10;
// const b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b); // it gives you the remainder
// console.log(a ** b); // Exponenenition 2 ^ 2

//2. Assignment :

// let age = 25;
// age = 25 + 1; //26  age += 1;

// console.log(age);

// Compound assignment :
// age += 2; // age = 25 + 2  //27
// age *= 2;
// console.log(age);

// Increment and Decrement :
// let count = 1;
// count++;
// count--;
// console.log(count);

// Prefix and Postfix :

// let x = 10;
// console.log(x++); // 11
// console.log(x++); // 12
// console.log(++x); // 13

//3. Comparison :
// let age = 25;
// console.log(age > 18); // true
// console.log(age < 18); // false
// console.log(age <= 18);
// console.log(age >= 18);

//4. Equality :
// == :  loose equality (value)
// === : strict equality (data type and value) recommended one
// console.log(age == 18); // false
// console.log("18" === 18);
// console.log("18" == 18);

// console.log(5 != 5); // loose inequality
// console.log(5 !== 5); // strict inequality

// console.log(0 ==  false);
// console.log(0 ===  false);
// console.log("" ==  false);

//4. Logical :
// && ||  !

//a. AND &&
// Both conditions must be true

// let age = 25;
// let isMarried = false;
// isMarried = true;

// console.log(age >= 18 && isMarried);

//b. OR ||
let age = 25;
let isMarried = false;
// isMarried = true;

console.log(age >= 18 || isMarried);

//c. NOT !

!!isMarried;
console.log(isMarried);

// Truthy and Falsy Values :

// false, 0, "", null, undefined,  NaN
// Except all these mentioned above falsy values are truthy values.

// Short-Circuit Evaluation :

const isLogged = true;

isLogged && console.log("Go to add to cart!!");

// const username = null;
const username = "";
const displayName = username || "Guest";
console.log(displayName);

//6. Unary :
// Unary means operating on one value.

let score = 10;
console.log(-score); // unary
console.log(typeof score); // number
console.log(++score);
console.log(score++);
console.log(!score);

// Ternary operator : 