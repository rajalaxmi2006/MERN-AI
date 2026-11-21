// debugger;
// console.log(1);

// const x;

// console.log(2);
// console.log(3);

//Async :
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 3000);

// console.log(3);

// let timer = setInterval(() => {
//   console.log("Hello");
//   clearInterval(timer);
// }, 1000);

// Promise :

// const myPromise = new Promise((resolve, reject) => {
//   let payment = false;

//   if (payment) {
//     resolve("Payment successful!!");
//   } else {
//     reject("Payment failed!!");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Process completed");
//   });

// -----------------------------------------

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data has been received from the server");
//   reject("Failed to load data");
//     }, 3000);
//   });
// }

// let res = getData();
// console.log(res);

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Completed");
//   });

// async --> makes a function return a promise
// await --> pauses execution inside an async function until a promise settles.

// async function dataHandle() {
//   console.log("...Loading");
//   try {
//     const result = await getData();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Execution Completed");
//   }
// }

// dataHandle();

// API (Application Programming Interface)
// An API allows two software applications to communicate with each other smoothly.

// HTTP Request :
// CRUD --> Create , Read , Update and Delete 

// GET, POST, PUT, PATCH, DELETE
// RESTfull API

// fetch("https://fakestoreapi.com/products/")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Modern way :
const url = "https://fakestoreapi.com/products/";
async function getUser() {

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to load");
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUser();
