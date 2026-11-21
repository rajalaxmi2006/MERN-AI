// Primitives:

//1. String :
// ES6+

// Text is represented using string.

let myName = "Pramod";
const lastName = "Jena";
let myCity = "Bhubaneswar";
const myState = "Odisha";

// console.log(myName, myCity, myState);
// myState = "UP"; //TypeError: Assignment to constant variable.
// console.log(myName, myCity, myState);

const count1 = "10";
const count2 = "20";
// console.log(count1 + count2); // Concatenation

// console.log(myName + "-" + lastName);

// Template literal
// console.log(`My name is ${myName}-${lastName}`);

//2. Number
const age = 25;
const price = 99.99;
const temp = -5;

const result = 10 / 0;
// console.log(result); // Infinity
const res = 0 / 0;
// console.log(res); // NaN(Not a Number)

//3. Boolean
const isMarried = false;
const isAdmin = true;

// console.log(isAdmin);

//4. Undefined
// A variable exists, but currently has no assigned value.

// const age; // it's not allowed
let selectedUser;
// console.log(selectedUser);

//5. Null
// There is currently no value/object here.

const loggedInUser = null;
// console.log(loggedInUser);

//6. BigInt
const indiaPopulation = 12112121212n;
// console.log(indiaPopulation);

const big1 = 12n; // bigint
const big2 = 10; // number
// const output = big1 + big2;
// console.log(output);

// 7. Symbol
// Symbols are unique primitive values.

const id1 = Symbol("pramod");
const id2 = Symbol("pramod");

// console.log(id1 === id2); // false
// console.log(id2);

// typeof = to check the data type
// console.log(typeof 12);
// console.log(typeof 10 / 0);
// console.log(typeof 0 / 0);
// console.log(typeof id1);
// console.log(typeof big1);

// Non-Primitive
// 1.  Object
const person = {
  name: "Pramod",
  age: 25,
};

// console.log(person);

// 2. Array
const skills = ["HTML", "CSS", "JS"];
// console.log(skills);

const multiArray = [1, 2, 0.5, true, "Okay", 112n];
// console.log(multiArray);

function add() {
  console.log(1 + 2);
}
add();

console.log(typeof person);
console.log(typeof multiArray);
console.log(typeof add);

// Technically, functions are callable objects in JS but when you check using typeof operator explicitly it gives the special kind of result "function".

console.log(typeof null); // object 
// This is a JS programming language quirk. 



