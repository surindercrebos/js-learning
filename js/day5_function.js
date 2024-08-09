// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
// function checkOddEven(number) {
//   if (number % 2 === 0) {
//     console.log(`${number} is Even`);
//   } else {
//     console.log(`${number} is Odd`);
//   }
// }
// checkOddEven(10);
// checkOddEven(11);

// • Task 2: Write a function to calculate the square of a number and return the result.
// function squareNumber(number) {
//   return number * number;
// }
// let result = squareNumber(5);
// console.log(result);

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
// function findMax(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// const max = findMax(10, 20);
// console.log(max);

// • Task 4: Write a function expression to concatenate two strings and return the result.
// function concatenateStrings(str1, str2) {
//   return str1 + str2;
// }
// const result = concatenateStrings("Hello ", "world");
// console.log(result);

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
// const sum = (a, b) => a + b;
// const result = sum(4, 5);
// console.log(result);

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
// const containsCharacter = (str, char) => str.includes(char);

// let result1 = containsCharacter("Hello world", "w");
// let result2 = containsCharacter("Hello world", "n");
// console.log(result1);
// console.log(result2);

// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// function multiply(a, b = 3) {
//   return a * b;
// }
// console.log(multiply(3, 5));
// console.log(multiply(6));

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
// function greet(name, age = 25) {
//   return `Hello, ${name}! You are ${age} years old.`;
// }

// console.log(greet("Alice", 30));
// console.log(greet("Bob"));

// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// function callFunctionNTimes(fn, n) {
//   return function () {
//     for (let i = 0; i < n; i++) {
//       fn();
//     }
//   };
// }
// function sayHello() {
//   console.log("Hello!");
// }
// const sayHello3Times = callFunctionNTimes(sayHello, 3);
// sayHello3Times();

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
// function applyFunctions(fn1, fn2, value) {
//   return fn2(fn1(value));
// }

// // Example usage:
// function add2(x) {
//   return x + 2;
// }

// function multiplyBy3(x) {
//   return x * 3;
// }

// const result = applyFunctions(add2, multiplyBy3, 5);
// console.log(result); // Output will be 21 ((5 + 2) * 3)

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
// Achievement:
// By the end of these activities, students will:
// • Understand and define functions using function declarations, expressions, and arrow functions.
// Use function parameters and default values effectively.
// • Create and utilize higher-order functions.
// • Apply functions to solve common problems and perform calculations.
// • Enhance code reusability and organization using functions.
