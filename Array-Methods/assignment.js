/*
Assignment 1:Array Modification

let fruits = ["apple", "banana", "orange"];

Tasks:-
Add "Grapes" and "strawberry" at the end.
Remove the last fruit.
Add "lemon" at the beginning.
Remove the first fruit.
Replace "banana" with "mango" using splice.
Print the final array.
 */

//1
let fruits = ["apple", "banana", "orange"];
fruits.push("Grapes", "strawberry");
fruits.pop();
fruits.unshift("lemon");
fruits.shift();
fruits.splice(1, 1, "mango");
console.log(fruits);
//=====================================================

/*
Assignment 2:
Using Splice to Add/Remove
let students = ["John", "Raj", "Meena", "David", "Anu"];

Tasks:-
Remove "Raj" and "Meena" from the array.
Insert "Kiran" and "Priya" at the same position.
Add "Sneha" at the end without using push.
Remove the last element using splice.
Print the updated student list.
*/

//2
let students = ["john", "Raj", "meena", "David", "Anu"];
// students.splice(1, 2);
// students.splice(1, 2, "Kiran", "priya");
students.splice(students.length, 0, "sneha");
students.splice(students.length - 1, 1);
console.log(students);

//=====================================================
/*
Assignment 3: Using Slice
let numbers = [5, 10, 15, 20, 25, 30, 35];

Tasks:-
Create a new array from index 2 to 5 (excluding 5) using slice.
Print the original and sliced array.

 */

let arr = [5, 10, 15, 20, 25, 30, 35];

let newarr = arr.slice(2, 6);
console.log(arr);
console.log(newarr);
