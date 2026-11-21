// console.log("Hello World !!!");

// How to select an html element :
//?1. getElementById()
//?2. getElementsByClassName()
//?3. getElementsByTagName()
//?4. querySelector()
//?5. querySelectorAll()

// const heading = document.getElementById("heading");
// console.log(heading);

// todo ? access the other two element

// const paragraph = document.getElementsByClassName("paragraph");
// console.log(paragraph);
// console.log(paragraph.length);

// const lastPara = paragraph[3];
// const lastPara = paragraph[paragraph.length - 1];
// console.log(lastPara);

// const subHeading = document.getElementsByTagName("h2");
// console.log(subHeading[0]);

// const button = document.querySelector("#btn");
// console.log(button);

// const para = document.querySelectorAll(".paragraph");
// console.log(para);
// console.log(para[0]);
// console.log(para[3]);

//DOM MANIPULATION :

// const heading = document.getElementById("heading");
// const heading = document.querySelector("#heading");

// heading.textContent = "Hello JS DOM";
// heading.innerText = "Hello JS DOM";

// console.log(heading);

// const emptyDiv = document.querySelector("#emptyDiv");
// emptyDiv.innerHTML = `<button id="btn">Stop</button>`;

// CSSOM :
// const heading = document.querySelector("#heading");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "40px";

// emptyDiv.style.display = "flex";

// heading.classList.add("active");
// heading.classList.remove("active");
// heading.classList.toggle("active");
// heading.classList.replace("active", "Inactive");

// const emptyDiv = document.querySelector("#emptyDiv");
// emptyDiv.innerHTML = `<a href=""></a>`;
// console.log(emptyDiv);

// const anchorTag = document.querySelector("a");
// anchorTag.textContent = "Visit Code Kariba";

// anchorTag.setAttribute("id", "anchor");
// anchorTag.setAttribute("target", "_blank");
// anchorTag.getAttribute("href");

// const list = document.querySelector("#unlist");

// create element
// const li2 = document.createElement("li");
// li2.textContent = "Pablo";

// const li3 = document.createElement("li");
// li3.textContent = "Escobar";

// Append
// list.appendChild(li2);
// list.appendChild(li3);

// list.append(li2, li3);
// li2.remove();

// EVENT :

// Click Event :
function show() {
  alert("You have clicked!!!");
}

// 2nd way :
const stopBtn = document.getElementById("stopBtn");

// stopBtn.onclick = function display() {
//   alert("Hey it's me");
// };

// Recommended :

// stopBtn.addEventListener("click", function () {
//   alert("It's me");
// });

// stopBtn.addEventListener("dblclick", () => alert("It's me"));

// stopBtn.addEventListener("click", () => alert("It's me"));

// stopBtn.addEventListener("click", display);

// function display() {
//   alert("It's me");
// }

// const calBtn = document.querySelectorAll(".cal");
// console.log(calBtn);

// calBtn[3].addEventListener("click", (event) => {
//   console.log(event.target.textContent);
//   console.log(event.currentTarget);
// });

const num1 = 10;
const num2 = 50;

console.log(eval(num1 + num2));
