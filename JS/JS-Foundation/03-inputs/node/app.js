// console.log() // Output
console.log(process.argv[2]); // 1 variable
console.log(process.argv[3]); // 2
console.log(process.argv[4]); // 3

//Todo : Write a cla for the same output "My name is: Pramod"

// Frontend Environment :
// let name = prompt("My name is: ");
// console.log(`My name is: ${name}`);  // Template literal

// Backend/Terminal :
let myName = process.argv[2];
console.log(`My name is: ${myName}`);

// Check the data types :
console.log(typeof myName);



