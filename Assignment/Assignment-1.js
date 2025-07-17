//21.Write a program to check if a number is divisible by 7 or not? let number = 7;

let number = 7;
if (number % 7 === 0) {
  console.log("it is divisiable");
} else {
  console.log("It is not adivisiable");
}

// 22.Write a program to check if a number is multiple of 3 or not?

let multiple = 9;
if (multiple % 3 === 0) {
  console.log("number is multiple 3");
} else {
  console.log("not multiple  3");
}

// 23.Write a program to check if a number is positive or not?

const num = 10;
if (num > 0) {
  console.log("The number is positive.");
} else {
  console.log("this is not positive number");
}

//24.Write a program to check if a number is 3-digit numbers or not?
let threedigit = 201;
if (threedigit >= 100 && threedigit <= 999) {
  console.log("It is 3-digit number");
} else {
  console.log("It is not  3-digit number");
}

//25.Write a program to print even or odd for a given number?

let numbers = 6;

if (numbers % 2 === 0) {
  console.log("it is even number");
} else {
  console.log("it is odd number");
}

//26. Write a program to print the greatest number in given two numbers?

var num1 = 5;

var num2 = 10;

var num3 = 15;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// 27. Write a program to print the least number given two numbers?

let n1 = 10;
let n2 = 30;
let n3 = 70;

if (n1 <= n2 && n1 <= n3) {
  console.log(n1);
} else if (n1 <= n3 && n2 <= n3) {
  console.log(n2);
} else {
  console.log(n3);
}

//28 Write a program to print the greatest number in given three numbers?

/* let num1 = 25;
let num2 = 10;
let num3 = 45;

let least;
if (num1 <= num2 && num1 <= num3) {
  least = num1;
} else if (num2 <= num1 && num2 <= num3) {
  least = num2;
} else {
  least = num3;
}
console.log("The least number is:", least);

 */

//29 Write a program to print the least number in given three numbers?

//30.Write a program to print the given 3 numbers in ascending orders?
let student_id = [100, 10, 55, 65, 20, 85];

student_id.sort((a, b) => a - b);
console.log(student_id);

//31 Write a program to print the given 3 numbers in descending orders?
let emp_id = [100, 10, 55, 65, 20, 85];

emp_id.sort((a, b) => b - a);
console.log(emp_id);

console.log("fhghghghg");
let a = 100;
let b = 50;
let c = 10;

// let list = [88, 77, 66, 55, 66, 77];

// let newlist = [...new Set(list)];
// // let newlist = new Set(list);
// console.log(newlist);
