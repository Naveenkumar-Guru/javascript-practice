/*
1. if-else Check
2.With User Input using prompt() (Browser only)
3.Function-Based Check
4.Function-Based Without Message Return
5. Arrow Function
6.Boolean Return Function
7.Loop through Multiple Numbers

*/

//1. if-else Check
let number = 7;
if (number % 7 === 0) {
  console.log(number + "is divesible by 7.");
} else {
  console.log(number + "is not divisible by 7.");
}

//2. User Input using prompt() (Browser only)

// let number = parseInt(prompt("enter the number:"));

// if (number % 7 === 0) {
//   console.log(number, "yes");
// } else {
//   console.log(number, "no");
// }

//3.Function-Based Check

function divisible(num) {
  if (num % 7 === 0) {
    console.log(num, "is divesible by 7.");
  } else {
    console.log(num + " not divesible by 7.");
  }
}
divisible(20);

//4.Function-Based Without Message Return
function divesible(num) {
  return num % 7 === 0;
}
console.log(divesible(7));
console.log(divesible(10));

//5. Arrow Function

const isDivisibleBy7 = (num) => num % 7 === 0;
console.log("yes", isDivisibleBy7(35)); // true
console.log("no", isDivisibleBy7(22)); // false

//6.Boolean Return with Ternary in Console

let num = 21;

console.log(
  num,
  num % 7 === 0 ? "it is divisibleby 7" : "it is not divisibleby 7"
);

let numb = 200;

if (numb >= 100 && numb <= 999) {
  console.log(numb, "it is  3 digit num");
} else {
  console.log(numb, "not a three digit number");
}
