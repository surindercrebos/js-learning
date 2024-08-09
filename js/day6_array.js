// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// • Task 2: Access the first and last elements of the array and log them to the console.
// const numbers = [1, 2, 3, 4, 5];
// const firstElement = numbers[0];
// const lastElement = numbers[numbers.length - 1];
// console.log(`${firstElement}, ${lastElement}`);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
// const numbers = [1, 2, 3, 4, 5];
// numbers.push(9);
// console.log(numbers);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
// const numbers = [1, 2, 3, 4, 5, 9];
// numbers.pop();
// console.log(numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.shift();
// console.log(numbers);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.unshift(0);
// console.log(numbers);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
// const numbers = [1, 2, 3, 4, 5, 6];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
// const numbers = [1, 2, 3, 4, 5];
// for (i = 0; i < numbers.length; i++) {
//   console.log(i);
// }

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element) => {
//   console.log(element);
// });

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const row = 1;
// const col = 2;
// const element = matrix[row][col];
// console.log(element);

// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
// Achievement:
// By the end of these activities, students will:
// • Create and manipulate arrays using various methods.
// • Transform and aggregate array data using map, filter, and reduce.
// • Iterate over arrays using loops and iteration methods.
// • Understand and work with multi-dimensional arrays.
