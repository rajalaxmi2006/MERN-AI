// Higher Order Function :

// A higher order function(hof) is a function that does at least one of these two things :

// 1. Accepts another function as an argument
// 2. Return another function as its result.

//? foreach():

const nums = [10, 20, 30, 40, 500];
// const newNums = [];

// for (let i = 0; i < nums.length; i++) {
//   newNums.push(nums[i] * 2);
// }

// console.log(newNums);

// nums.forEach((el, i) => console.log(el * 2));

// nums.forEach(function (el, i) {
//   console.log(el * 2);
// });

// nums.forEach((el, i) => {
//   if (el >= 20) {
//     console.log(`Element: ${el} and index no: ${i}`);
//   }
// });

//? map():

// const newNums = nums.map((el) => {
//   return el * 2;
// });

// console.log(newNums);

//? filter :

// const filteredNums = nums.filter((el) => {
//   return el > 20;
// });

// const filteredNums = nums.filter((el) => el > 20);

// console.log(filteredNums);

//? reduce :

// const total = nums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(total);

// todo :
// const cart = [
//   { product: "laptop", price: 50000 },
//   { product: "mobile", price: 10000 },
//   { product: "watch", price: 5000 },
//   { product: "tv", price: 15000 },
// ];

// const totalPrice = cart.reduce((ac, cv) => {
//   return ac + cv.price;
// }, 0);

// console.log(`Total price: ${totalPrice}`);

// todo : filter out those city names which temp is above 50 degree centigrade?

// const weather = [
//   { city: "bhubaneswar", temp: 52 },
//   { city: "cuttack", temp: 48 },
//   { city: "berhampur", temp: 36 },
//   { city: "rourkela", temp: 41 },
// ];

// const filteredOutCity = weather.filter((cities) => {
//   return cities.temp > 36;
// });

// console.log(filteredOutCity);

// const data = require("./data.json");
// const person = require("./data.js");


// console.log(data);
// console.log(person);
