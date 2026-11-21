// Javascript provides data structures to organize related information.

//1. Array(A collection of values)
//2. Object(A collection of properties)
//3. String(A sequence of text)

// What is an array ?
// An array stores multiple values in an ordered collection.
// Array Indexing(zero based indexing)
// length(number of elements present inside an array)

// Array methods:
// 1. push();
// 2. pop();
// 3. unshift();
// 4. shift()

// todo create an array

// const names = ["Abc", "xyz", 123, true, false, 123n, null, undefined];
// console.log(names);

// console.log(names.indexOf("Abc"));
// console.log(names.length);

// console.log(names[7]);
// console.log(names[names.length - 1]);

// names.push("last");
// console.log(names);

// names.pop();
// console.log(names);

// names.unshift("first");
// console.log(names);

// names.shift();
// console.log(names);

// console.log(Array.isArray(names));

// const newArray = new Array(1, 2, 3, 4, 5, 6);
// console.log(newArray);

// todo find out the even nums from the above named newArray.

// let count = 0;

// for (let i = 0; i < newArray.length; i++) {
//   if (newArray[i] % 2 === 0) {
//     count++;
//   }
// }

// console.log(count);

// array :

// An array is an ordered list of values. Each values is called an element.
// Specified by an index.
// The size of an array is dynamic(auto-growing)

// const or let
// const arr = [];
// console.log(arr); // []

// const arr = [1, 2, "three", false];
// console.log(arr);

// arr.push(5);
// arr.pop();
// arr.shift();
// arr.unshift();
// console.log(arr);

// Array constructor

// const arr = new Array();
// console.log(arr);

// const arr = Array();
// console.log(arr);

// const arr = Array(5);
// arr.push(6);
// console.log(arr.length);
// console.log(arr);

// const arr = new Array(1, 2, 3, 4, 5, 6);
// arr[2] = 10;
// console.log(arr[2]);
// console.log(arr);

