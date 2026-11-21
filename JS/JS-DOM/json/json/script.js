// Student Data

const student = {
  name: "Pablo",
  age: 25,
  city: "Bhubaneswar",
};

// Object --> JSON

const jsonData = JSON.stringify(student);
console.log(jsonData);
console.log(typeof jsonData);

// JSON --> Object

const parseData = JSON.parse(jsonData);
console.log(parseData);
console.log(typeof parseData);

// Local Storage :

// Save item :
localStorage.setItem("student_data", jsonData);

// Get item
const localStudent = localStorage.getItem("student_data");
const parse = JSON.parse(localStudent);

console.log(parse);


// localStorage.removeItem("key")
// localStorage.clear();  // all clear 
