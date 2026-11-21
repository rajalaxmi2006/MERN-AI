// Loops in JS

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

//? increment by 2

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

//? 5 ka multiplication table

// const num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

//? even and odd

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} : Even`);
//   }
// }

//? Accumulator or counter
// A counter tracks how many times something happened.

// let count = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     count++; // Accumulator
//   }
// }

// console.log(`Total even no: ${count}`);

// While... Loop
// Use while...loop when the loop should continue while a condition remains true.

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do...while loop
// A do...while loop executes the code at least once.

// let i = 6;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//? continue
// skips the current iteration and moves to the next one.

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i); // 0 1 2 4 5
// }

//? break
// break immediately terminates the loop.

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i); // 0 1 2
// }

// Nested loops :

// for (let row = 1; row <= 3; row++) {
//   for (let col = 1; col <= 3; col++) {
//     console.log(`Row: ${row} :: Col: ${col}`);
//   }
// }

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log("Code Kariba");
//   }
// }

//? Pattern Printing
/*

* * * *
* * * *
* * * *
* * * *
* * * *

*/

// const size = 5;

// for (let i = 1; i <= size; i++) {
//   let empty_space = "";

//   for (let j = 1; j <= size - 1; j++) {
//     empty_space += "*";
//   }

//   console.log(empty_space);
// }

//? Pattern Printing
/*

* 
* * 
* * * 
* * * *
* * * * * 

*/

// const common = 5;

// for (let i = 1; i <= common; i++) {
//   let line = ""; // store

//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }

//   console.log(line);
// }

// Grid system

// const rows = 3;
// const cols = 5;

// for (let i = 1; i <= rows; i++) {
//   let space = "";

//   for (let j = 1; j <= cols; j++) {
//     space += `[${i}, ${j}]`;
//   }

//   console.log(space);
// }

/*

X . . .
. X . .
. . X .
. . . X

*/

// const common = 4;

// for (let i = 0; i < common; i++) {
//   let space = "";

//   for (let j = 0; j < common; j++) {
//     if (i === j) {
//       space += "X";
//     } else {
//       space += ".";
//     }
//   }

//   console.log(space);
// }

// break and continue
// for (let i = 1; i <= 4; i++) {

//   for (let j = 1; j <= 4; j++) {
//     if (j === 3) {
//       break;
//     }
//     console.log(i, j);
//   }
// }

// for (let i = 0; i<n ; i++) {

//   for (let j = 0; j<n; j++) {
//     console.log(i, j);
//   }

// }

// The inner loop executes (n * n times)  = T(n) = O(n^2)


