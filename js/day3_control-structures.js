// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 95;
// if (num > 0) {
//   console.log(`${num} is positive`);
// } else if (num < 0) {
//   console.log(`${num} is Negative`);
// } else {
//   console.log(`number is zero`);
// }

// *   Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
// if (age >= 18) {
//   console.log(`you are eligible to vote`);
// } else {
//   console.log(`you are not eligible to vote`);
// }

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 30;

// if (num1 >= num2) {
//   if (num1 >= num3) {
//     console.log(`Number one is the largest`);
//   } else {
//     console.log(`Number three is the largest`);
//   }
// } else {
//   if (num2 >= num3) {
//     console.log(`Number two is the largest`);
//   } else {
//     console.log(`Number three is the largest`);
//   }
// }

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 10;
let dayName;

// switch (dayNumber) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day number";
// }
// console.log(dayName);

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85;
let grade;

// switch (true) {
//   case score >= 90 && score <= 100:
//     grade = "A";
//     break;
//   case score >= 80 && score < 90:
//     grade = "B";
//     break;
//   case score >= 70 && score < 80:
//     grade = "C";
//     break;
//   case score >= 60 && score < 70:
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }

// console.log(`For a score of ${score}, the grade is ${grade}`);

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num5 = 34;
let result = num5 % 2 === 0 ? "Even" : "odd";
// console.log(`${result}`);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log(`Yes, this is a leap year.`);
//     } else {
//       console.log(`No, this is not a leap year.`);
//     }
//   } else {
//     console.log(`Yes, this is a leap year.`);
//   }
// } else {
//   console.log(`No, this is not a leap year.`);
// }

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:
// By the end of these activities, students will:
// Implement and understand basic if-else control flow.
// Use nested if-else statements to handle multiple conditions.
// Utilize switch cases for control flow based on specific values.
// Apply the ternary operator for concise condition checking.
// Combine multiple conditions to solve more complex problems.
