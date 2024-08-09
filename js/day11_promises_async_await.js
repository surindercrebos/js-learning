// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promise resolved after 2 seconds");
//   }, 2000);
// });

// promise.then((message) => {
//   console.log(message);
// });

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise rejected after 2 seconds");
//   }, 2000);
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// function fetchData(message, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, delay);
//   });
// }

// fetchData("Fetching data 1...", 1000)
//   .then((message) => {
//     console.log(message);
//     return fetchData("Fetching data 2...", 1000);
//   })
//   .then((message) => {
//     console.log(message);
//     return fetchData("Fetching data 3...", 1000);
//   })
//   .then((message) => {
//     console.log(message);
//     console.log("All data fetched.");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// const examplePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise has been resolved!");
//   }, 2000);
// });

// async function waitForPromise() {
//   try {
//     const result = await examplePromise;
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// waitForPromise();

// // Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// const examplePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise has been rejected!");
//   }, 1000);
// });
// async function waitForPromise() {
//   try {
//     const result = await examplePromise;
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// waitForPromise();

// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// fetch(apiUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//   }
// }
// fetchData();

// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// const apiUrls = [
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/users",
// ];

// const fetchData = async () => {
//   try {
//     const promises = apiUrls.map((url) =>
//       fetch(url).then((response) => response.json())
//     );
//     const [posts, comments, users] = await Promise.all(promises);

//     console.log("Posts:", posts);
//     console.log("Comments:", comments);
//     console.log("Users:", users);
//   } catch (error) {
//     console.error(
//       "There was a problem with one or more fetch operations:",
//       error
//     );
//   }
// };

// fetchData();

// Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.
// const promise1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 1 resolved"), 1000)
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 2 resolved"), 500)
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 3 resolved"), 1500)
// );

// Promise.race([promise1, promise2, promise3])
//   .then((value) => {
//     console.log("The first resolved promise value:", value);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise. race to handle multiple promises concurrently and logs the results.
// Achievement:
// By the end of these activities, students will:
// • Understand and create promises, including handling resolved and rejected states.
// Chain multiple promises to perform sequential asynchronous operations.
// • Use async/await to handle asynchronous code more readably.
// Fetch data from public APIs using both promises and async/await.
// • Manage multiple concurrent promises using Promise.all and Promise. race.
