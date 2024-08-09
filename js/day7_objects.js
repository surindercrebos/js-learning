// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
// const book = {
//   title: "Rich Dad Poor Dad",
//   author: "Robert T. Kiyosaki and Sharon Lechter",
//   year: 1997,
// };
// console.log(book);

// • Task 2: Access and log the title and author properties of the book object.
// const book = {
//   title: "Rich Dad Poor Dad",
//   author: "Robert T. Kiyosaki and Sharon Lechter",
//   year: 1997,
// };
// console.log(`Title : ${book.title}`);
// console.log(`Author : ${book.author}`);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// const book = {
//   title: "Rich Dad Poor Dad",
//   author: "Robert T. Kiyosaki and Sharon Lechter",
//   year: 1997,
//   getInfo: function () {
//     return `${this.title} by ${this.author}`;
//   },
// };
// console.log(book.getInfo());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
// const book = {
//   title: "Rich Dad Poor Dad",
//   author: "Robert T. Kiyosaki and Sharon Lechter",
//   year: 1997,
//   updatedYear: function (newYear) {
//     this.year = newYear;
//     console.log(this.year);
//   },
// };
// book.updatedYear(2025);

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// const library = {
//   name: "City Library",
//   books: [
//     {
//       title: "Rich Dad Poor Dad",
//       author: "Robert T. Kiyosaki and Sharon Lechter",
//       year: 1997,
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//   ],
// };
// console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
// const library = {
//   name: "City Library",
//   books: [
//     {
//       title: "Rich Dad Poor Dad",
//       author: "Robert T. Kiyosaki and Sharon Lechter",
//       year: 1997,
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//   ],
// };
// library.books.forEach((book) => console.log(book.title));

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// const book = {
//   title: "Rich Dad Poor Dad",
//   author: "Robert T. Kiyosaki and Sharon Lechter",
//   year: 1997,
//   getTitleAndYear: function () {
//     return `${this.title} in (${this.year})`;
//   },
// };
// console.log(book.getTitleAndYear());
//  Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
// const book = {
//   title: "Rich Dad Poor Dad",
//   author: "Robert T. Kiyosaki and Sharon Lechter",
//   year: 1997,
// };
// for (let key in book) {
//   if (book.hasOwnProperty(key)) {
//     console.log(`${key}: ${book[key]}`);
//   }
// }

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
// const book = {
//   title: "Rich Dad Poor Dad",
//   author: "Robert T. Kiyosaki and Sharon Lechter",
//   year: 1997,
// };
// const keys = Object.keys(book);
// const values = Object.values(book);
// console.log("Keys:");
// keys.forEach((key) => console.log(key));
// console.log("Values:");
// values.forEach((value) => console.log(value));

// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values. Achievement:
// By the end of these activities, students will:
// • Create and manipulate objects with properties and methods.
// • Understand and use the this keyword in object methods.
// • Work with nested objects and arrays of objects.
// • Iterate over an object's properties using loops and built-in methods.
