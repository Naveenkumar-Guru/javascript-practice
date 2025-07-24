//1 push,pop,shift,unshift,splice,slice

let arr = [10, 20, 30, 40, 50];
console.log(arr);

arr.push(60, 70);
arr.pop();
arr.shift(); // remove starting element in array of index
arr.unshift(-10); //adding 1st element of index 1

console.log(arr);

//5.splice

let spl = ["Manoj", "Jaya", "Saravanan", "Vinod", "Leela"];
spl.splice(3, 1, "vinay");
spl.splice(5, 0, "bhavani", "vamsi");
console.log(spl);
