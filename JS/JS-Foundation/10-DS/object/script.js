// Object :

// An object is a collection of key and value pairs in javascript.
// properties : key and value pair

// const students = {
//   name: "pablo",
//   age: 25,
//   city: "BBSR",
//   isMarried: false,
//   "is available": false,
// };

// console.log(students);
// console.log(students.name); // dot notation
// console.log(students["name"]); // bracket notation
// console.log(students["is available"]); // bracket notation

// students.isMarried = true;
// console.log(students);

// students.state = "Odisha";
// console.log(students);

// const newObj = new Object();
// console.log(newObj);

// Object.freeze(newObj);

// newObj.name = "Idk";
// newObj.age = 25;
// newObj.name = "hello";
// console.log(newObj);

// for (const key in students) {
//   console.log(`${key}: ${students[key]}`);
// }

// const keys = Object.keys(students);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i] + ":" + students[keys[i]]);
// }

// Object :
// An object is an unordered collection of key and value pairs. Each key and value pairs is called property.

// The key can be a string.
// The value can ve any value(any data types).

const obj = {};
console.log(obj);

const person1 = {
  name: "Pramod",
  age: 25,
  isMarried: false,
  "city code": 754010,
};
console.log(person1);

// Dot notation  or Bracket notation
console.log(person1.name);
console.log(person1.age);
console.log(person1["isMarried"]);
console.log(person1["city code"]);

person1.city = "Bhubanewar";
console.log(person1);
console.log(person1.state);
person1.age = 26;
console.log(person1);

delete person1.age; // delete
// console.log(age in person1);

// in operator :
console.log("name" in person1); // true
console.log(person1);
