// DOM Selection

const form = document.querySelector("#studentForm");
const nameInput = document.querySelector("#studentName");
const emailInput = document.querySelector("#studentEmail");
const studentList = document.querySelector("#studentList");
const totalStudents = document.querySelector("#totalStudents");
const searchInput = document.querySelector("#search");
const themeBtn = document.querySelector("#themeBtn");
const statusText = document.querySelector("#status");
const dateText = document.querySelector("#date");

// Application state

let students = JSON.parse(localStorage.getItem("students")) || [];

// Save data

function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
}

// Display students
function displayStudents(data = students) {
  studentList.innerHTML = "";

  data.forEach((student) => {
    const li = document.createElement("li");
    const details = document.createElement("span");

    details.textContent = `${student.name} - ${student.email}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.dataset.id = student.id;

    li.append(details, deleteBtn);
    studentList.appendChild(li);
  });

  totalStudents.textContent = students.length;
}

// Add students
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please fill all the fields");
    return;
  }

  const student = {
    id: crypto.randomUUID(),
    name,
    email,
  };

  students.push(student);
  saveStudents();
  displayStudents();

  form.reset();
});

// Delete students

studentList.addEventListener("click", (event) => {
  if (!event.target.matches(".delete")) {
    return;
  }

  const id = event.target.dataset.id;

  const confirmed = confirm("Are you sure want to delete this student ?");

  if (!confirmed) return;

  students = students.filter((student) => student.id !== id);

  saveStudents();

  displayStudents();
});

// Search
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchValue) ||
      student.email.toLowerCase().includes(searchValue)
    );
  });

  displayStudents(filteredStudents);
});

// Dark mode

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Browser connection
function updateConnection() {
  statusText.textContent = navigator.onLine ? "Online" : "Offline";
}

window.addEventListener("online", updateConnection);
window.addEventListener("offline", updateConnection);

// Date
function updateDate() {
  dateText.textContent = new Date().toLocaleString();
}

updateDate();

setInterval(updateDate, 1000);

// Initial Rendering
updateConnection();
displayStudents();
