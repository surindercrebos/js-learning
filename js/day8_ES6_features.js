// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
// const name = "Surinder";
// const age = 29;
// const message = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message);

// • Task 2: Create a multi-line string using template literals and log it to the console.
// const multiLineString = `This is a string
// that spans multiple
// lines using template
// literals.`;
// console.log(multiLineString);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
// const numbers = [10, 20, 30, 40, 50, 60];
// const [first, second] = numbers;
// console.log(`First element: ${first}`);
// console.log(`Second element: ${second}`);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
//   genre: "Fiction",
// };
// const { title, author } = book;
// console.log(`Title: ${title}`);
// console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
// const existingArray = [1, 2, 3, 4];
// const additionalElements = [5, 6, 7];
// const newArray = [...existingArray, ...additionalElements];
// console.log(newArray);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
// function sum(...numbers) {
//   return numbers.reduce((total, current) => total + current, 0);
// }
// const result = sum(1, 2, 3, 4, 5);
// console.log(result);

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
// function multiply(a, b = 1) {
//   return a * b;
// }
// const resultWithBothParams = multiply(3, 5);
// console.log(resultWithBothParams);

// const resultWithOneParam = multiply(8);
// console.log(resultWithOneParam);

//  Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// const person = {
//   name: "Suridner Kumar",
//   age: 29,
//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   },
//   updateAge(newAge) {
//     this.age = newAge;
//   },
// };
// console.log(person);
// person.updateAge(31);
// console.log(person);

// • Task 9: Create an object with computed property names based on variables and log the object to the console.
// const key1 = "firstName";
// const key2 = "lastname";

// const person = {
//   [key1]: "Surinder",
//   [key2]: "Kumar",
// };
// console.log(person);

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
// Achievement:
// By the end of these activities, students will:
// • Understand and use template literals for string interpolation and multi-line strings.
// •
// • Apply destructuring to extract values from arrays and objects.
// • Utilize spread and rest operators for array manipulation and function arguments.
// • Define functions with default parameters.
// • Create objects using enhanced object literals, including methods and computed property names.
