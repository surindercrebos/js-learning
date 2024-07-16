// Activity 1: Variable Declaration

// Declare a variable using var, assign it a number, and log the value to the console.
var number = 2024;
console.log(number);

// Declare a variable using let , assign it a string, and log the value to the console.
var string = "Hello surinder how are you?";
console.log(string);

// Activity 2: Constant Declaration
// Declare a variable using const , assign it a boolean value, and log the value to the console.
const isAvailable = true;
console.log(isAvailable);

// Activity 3: Data Types
// Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let x = 2024;
console.log(typeof x);

let y = "this is the string checking line";
console.log(typeof y);

let z = false;
console.log(typeof z);

let car = {
  brand: "honda",
  name: "amaze",
  color: "grey",
};
console.log(typeof car);

let student = ["surinder", "gurwinder", "lalit", "ankush", "swaraj"];
console.log(typeof student);

// Activity 4: Reassigning Variables
// Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
let surinder = 28;
console.log(surinder);
surinder = 29;
console.log(surinder);

// Activity 5: Understanding const
// Try reassigning a variable declared with const and observe the error.
const gurwinder = 28;
gurwinder = 29;
console.log(gurwinder);

// Feature Request:
// 1.Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let a = 2024;
console.log(a + " is = " + typeof a);

let b = "Hello how are you man!";
console.log(b + " is = " + typeof b);

let c = false;
console.log(c + " is = " + typeof c);

let bike = {
  brand: "honda",
  name: "shine",
  color: "red",
};

console.log(bike, " is = " + typeof bike);

let employee = ["Surinder", "Gurwinder", "Ankush", "Lalit"];
console.log(employee, "= is = " + typeof employee);

// 2.Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let Lalit = 28;
Lalit = 29;
console.log(Lalit);

const ankush = 30;
ankush = 31;
console.log(ankush);
