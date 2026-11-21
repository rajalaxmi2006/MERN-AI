// String :

// It is primitive and immutable.
// ""
// ''
// `` : backticks(template literal)

const myName = "Pramod";
// console.log(myName);
// console.log(myName.length);
// console.log(myName[3]); // m
// myName[3] = "n";
// console.log(myName[3]); // m
// console.log(myName);

// console.log(`my name is ${myName}`); // template literal

// Escape chars :
// "rn" : windows line break
// "n" : unix line break
// "t" : tab
// '': backslash

// Concatenation :

// let name = "Pramod";
// console.log(name + " " + "Kumar");

// String();
// toString();

console.log("a" > "A");
console.log("10" > "100");

let quote = "To be or not to be";
quote = quote.replace("be", "code");

console.log(quote); // "To code or not to code"