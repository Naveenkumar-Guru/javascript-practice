//1.push()
//2.pop()
//3.shift()
//4.unshift()
//5.splice()
//6.slice()
//7.flat()
//8.toString()
//9.toUppercase()
//10.lowecase()
//11.length()
//12.delete()
//13.trim()
//14.date()
//sort()
//Assignment--->hara rama hara krishna
//imp--->//1.spread operatos example like-->...  2.concat example--> concat(a),b

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
// spl.splice(0, 3); //this is removing 1st 3 elements in array
// spl.splice(2, "naveen", "kummar");
console.log(spl);

//6.slice
