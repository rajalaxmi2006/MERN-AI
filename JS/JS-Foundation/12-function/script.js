// Function Declaration

// function say() {
//   console.log("Hello my name is Pramod");
// }

// say(); // function call
// say();
// say();

// Parameters(params) and Arguments(args)

// function say(myName) {
//   console.log(`Hello my name is ${myName}`);
// }

// say("Pramod");
// say("Pablo");
// say("Xyz");

// return : keyword

// function add(num1, num2) {
//   return num1 + num2;
// }

// const result = add(20, 25);
// console.log(result);

// console.log(add(20,25));  // function call n Print value

// function compare(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// const result = compare(2, 2);
// console.log(result);

// function add() {
//   let sum = 0;
//   console.log(typeof arguments);

//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }

//   return [sum, typeof arguments];
// }

// const result = add(1, 2, 5, 10, 45, 100);
// console.log(result[1]);

// let x = 10;  // primitive types / fixed / immutable

// array,object..  // non-primitive

// Hoisting :

// console.log(x); // access
// var x = 10; // declaration + initialization

// hoisting();

// function hoisting() {
//   console.log("It's hoisted");
// }

// hoisting();

// how to avoid

// hoisting(); // cannot access before initialization

// const hoisting = function () {
//   console.log("It's hoisted");
// };

// hoisting();

// Todo :
//? Function declaration vs Function Expression
//? Default Params
//? Anonymous function
//? Arrow function
//? Arrow function with one parameter
//? Implicit return
//? Explicit return
//? Global scope
//? Local or function scope
//? Block scope
//? this keyword
//? HOF
//? for..in
//? for..of
//? sort

// Function declaration vs Function Expression

// Declaration :

// function say(){
//   return "Hello Code Kariba"
// }

// say();

// Expression :

// const say = function(){
//   return "Hello Code Kariba";
// }

// say();

// Default Parameters :

// function greet(name = "Pramod") {
// const name = arguments[0];
//   return `Welcome ${name} to code kariba family !!!`;
// }

// const res = greet();
// console.log(res);

// Arrow function or fat arrow function(es6+ 2015+)

// function add(){
//    return
// }

// add();

// Fat arrow function :

// const add = (a,b) => {
//   return a * b;
// }

// const res = add(10,15);
// console.log(res);

// Return one value :

// add();

// const add = (a, b) => a * b;   // implicit return
// console.log(add(10, 15));

// explicit return :

// const add = (a,b) => {
//   return a+b;
// }

// add(10,20)

// Global scope :

// let college = "GEC"; // global variable / global scope

// const show = () => {
//   console.log(`My college name is ${college}`); // inside function
// };

// show();
// console.log(college); // outside function

// LOCAL OR FUNCTION SCOPE :

// const show = () => {
//   let college = "GEC";
//   console.log(`My college name is ${college}`); // inside function
// };

// show();
// console.log(college); // outside function

// BLOCK SCOPE :

// if (true) {
//   let name = "Pramod";
//   let age = 26;
//   console.log(`My name is ${name} and age is ${age}`); // inside or block
// }

// console.log(name, age); // outside the block reference error

// var : function scope and you can re-declare
// let : block scope and you cannot re-declare and re-initialize
// const : block scope and you cannot re-declare and re-assignment

// var age = 26;
// var age = 27;

// this keyword :
// It refers to the execution context of a function.

// console.log(this); // global this

// const student = {

//   name: "Pramod",
//   age: 26,

//   show: function () {
//     console.log(`My name is ${this.name} and age is ${this.age}`);
//   },
// };

// console.log(student.name); // Pramod
// student.show();

// show : method

// const student = {
//   name: "Pramod",
//   age: 26,

//   show: () => {
//     console.log(`My name is ${this.name} and age is ${this.age}`);
//   },
// };

// student.show();

// todo : this keyword :

// const student = {
//   name: "Pramod",
//   age: 27,
//   show: function () {
//     console.log(`My name is: ${this["name"]} and age is: ${this["age"]}`);
//   },
//   show: () => {
//     console.log(`My name is: ${this.name} and age is: ${this.age}`);
//   },
// };

// student["name"]; // object notation
// student.name; // dot notation

// student.show();

// const students = {
//   name: "Pablo",
//   age: 51,
//   city: "xyz",
//   profession: "drug mafia",
// };

// for (const key in students) {
//   console.log(`${key}:${students[key]}`);
// }

// const names = new Array("Pablo", "Ramesh", "Manas", "Dipti");

// const names = ["Pablo", "Ramesh", "Manas", "Dipti"];

// console.log(names);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (const element of names) {
//   console.log(element);
// }

// const arr = [10, 25, 35, 21, 1, 2, 2555];

// const names = ["sony", "apple", "pixel", "samsung"];
// let products = [
//   { name: "iPhone", price: 900 },
//   { name: "Samsung Galaxy", price: 850 },
//   { name: "Sony Xperia", price: 700 },
// ];

// const sortedArray = arr.sort((a, b) => b - a);

// const sortedNames = names.sort((a, b) => b - a);
// const sortedNames = names.sort();

// console.log(sortedArray);
// console.log(sortedNames);

// Callback function :

// A callback function passed as an argument to another function so the receiving function can invoke it.

// function order(name, c1, c2, c3) {
//   console.log("Hello", name);

//   c1();
//   c2();
//   c3();
// }

// function orderRecieved() {
//   console.log("Your order has been received");
// }

// function orderDispathced() {
//   console.log("Your order has been dispatched");
// }

// function orderAtLocation() {
//   console.log("Your order at your location");
// }

// order("Pramod", orderRecieved, orderDispathced, orderAtLocation);

// const callbackFun = () => {
//   console.log("Your order has been received");
// };

// setTimeout(callbackFun, 5000);

// setTimeout(() => {
//   console.log("Your order has been received");
// }, 2000);

// let time = 10;

// setInterval(() => {
//   if (time === 0) {
//     return;
//   }
//   time--;
//   console.log(`${time}s`);
// }, 1000);

// HOF : Higher Order Function

// const students = [
//   {
//     id: 1,
//     name: "Pablo",
//     age: 31,
//   },
//   {
//     id: 2,
//     name: "Pablo",
//     age: 31,
//   },
//   {
//     id: 3,
//     name: "Pablo",
//     age: 31,
//   },
//   {
//     id: 4,
//     name: "Pablo",
//     age: 31,
//   },
//   {
//     id: 5,
//     name: "Pablo",
//     age: 31,
//   },
// ];

// forEach :
// students.forEach((el, i) => {
//   console.log(el.age);
// });

// const mappedArray = students.map((el, i) => {
//   return el;
// });

// console.log(mappedArray);

// const mappedArray = students.filter((el, i) => {
//   return el.id > 2;
// });

// console.log(mappedArray);

// sorting :

// const names = ["pablo", "akash", "barsha", "pragnya", "jyoti"];

// ascending :
// const sorted = names.sort();
// console.log(sorted);

// descending :
// const sorted = names.sort().reverse();
// console.log(sorted);

// const sorted = names.sort((a, b) => a.localeCompare(b));
// console.log(sorted);

// const sorted = names.sort((a, b) => b.localeCompare(a));
// console.log(sorted);

// const nums = [10, 25, 52, 65, 79];

// const sorted = nums.sort((a, b) => a - b);
// console.log(sorted);
// const sorted = nums.sort((a, b) => b - a);
// console.log(sorted);

// SPREAD OPERATOR VS REST OPERATOR :

// SPREAD :
// The spread operator is used to expand elements of an array or properties of an object.

// const nums = [10, 20, 25, 35, 45, 89, 91];

// const copy = nums;

// console.log(copy);

// const copy = [...nums, 101];
// copy.push(100);
// console.log(copy);

// const person = {
//   name: "Pablo",
//   age: 52,
//   city: "unknown",
// };

// const copy = { ...person, state: "xyz" };
// console.log(copy);

// REST :
// The rest operator collects multiple individual values into a single array or object.

// function add(a, b, c) {
//   return a + b + c;
// }

// const res = add(1,2,3);
// console.log(res);

// function add(...nums) {
//   let total = 0;
//   for (const el of nums) {
//     total += el;
//   }
//   return total;
// }

// const res = add(1, 2, 3);
// console.log(res);

// Destructuring :

// const arr = ["pablo", "sweety", "chingu", "miku"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// const [first, second, third] = arr;
// console.log(first, second, third);

// const [first, ...remaining] = arr;
// console.log(first, remaining);

// const person = {
//   name: "Pablo",
//   age: 52,
//   city: "unknown",
// };

// const { name, age } = person;
// console.log(name, age);

// Constructor function :
// A constructor function is a regular js function used to create and initialise
// multiple objects with similar properties and methods

// const s1 = {
//   name: "xyz",
//   age: 21,
// };

// const s2 = {
//   name: "abc",
//   age: 20,
// };
// const s3 = {
//   name: "def",
//   age: 22,
// };

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const s1 = new Student("xyz", 21);
// const s2 = new Student("abc", 20);
// const s3 = new Student("def", 22);

// console.log(s1);
// console.log(s2);
// console.log(s3);

// CLASS :

// class Student {
//   constructor(name, age, course) {
//     this.name = name;
//     this.age = age;
//     this.course = course;
//   }

//   display() {
//     console.log(this.name);
//   }
// }

// const s1 = new Student("xyz", 25, "MERN");
// const s2 = new Student("abc", 26, "MERN");

// console.log(s1);
// s1.display();
