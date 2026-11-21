// Syntax :

// if(condition){
// code
// }else {
// code
// }

// let age = 17;

// if (age >= 18) {
// ReferenceError: age is not defined
//   console.log("You're an adult!!!");
// } else {
//   console.log("You're a minor!!!");
// }

// Multiple condition
// const score = 95;

// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 80) {
//   console.log("Grade B");
// } else if (score >= 70) {
//   console.log("Grade C");
// } else {
//   console.log("Grade D");
// }

// switch
// Todo : role =  admin , role = user , role = student

// const role = "";
const role = process.argv[2];

// if (role === "admin") {
//   console.warn("Login to admin dashboard");
// } else if (role === "user") {
//   console.warn("Login to user dashboard");
// } else if (role === "student") {
//   console.warn("Login to student dashboard");
// } else {
//   console.error("You are out of syllabus");
// }

switch (role) {
  case "admin":
    console.warn("Login to admin dashboard");
    break;

  case "user":
    console.warn("Login to user dashboard");
    break;

  case "student":
    console.warn("Login to student dashboard");
    break;

  default:
    console.warn("Unknown");
}

// Todo ?
const value = "10";

switch (value) {
  case 10:
    console.log("Number");
    break;

  case "10":
    console.log("String");
    break;

  default:
    console.log("Others");

    break;
}
