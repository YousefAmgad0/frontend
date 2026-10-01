// const x = +prompt("Enter num 1", 1);
// const y = +prompt("Enter num 2", 2);

// console.log(x + y);

// console.log((6.35).toFixed(1));

// let num = +prompt("Enter num");

// while (Number.isNaN(num)) {
//   num = +prompt("Enter num");
// }
// console.log(num);

// let text = "hello";

// text = "H" + text.slice(1);

// console.log(text); // Hello

// console.log("a" > "A");

// const names = ["Yousef", "Ahmed", "Mohamed"];

// names.sort((a, b) => a.localeCompare(b));

// console.log(names);

// function checkSpam(str) {
//   const text = str.toLowerCase();
//   return text.includes("viagra") || text.includes("xxx");
// }
// if (checkSpam("fiddagra")) {
//   console.log("Error");
// }

// console.log(text[0].toUpperCase() + text.slice(1));

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   }
//   return str;
// }
// const ff = "jll10";
// console.log(parseFloat(ff));

// function extractCurrencyValue(str) {
//   str = +str.slice(1);
//   return str;
// }

// const products = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
// ];

// console.log(products[1].id);

// console.log(products.join('-'));

// const arr = ["Jazz", "Blues"];
// arr.push("Rock-n-Roll");
// arr[Math.trunc(arr.length / 2)] = "Classics";
// const removed = arr.shift();
// console.log(removed);
// arr.unshift("Rap", "Reggae");
// console.log(arr);

/**************************************************** */
// let input = prompt("Enter a number");

// const arr = [];

// while (input !== null && input !== "" && !isNaN(input)) {
//   arr.push(Number(input));
//   input = prompt("Enter a number");
// }

/************************************* */
//Kadane's Algorithm
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let currentSum = 0;

//   for (const num of arr) {
//     currentSum += num;

//     if (currentSum < 0) {
//       currentSum = 0;
//     }

//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }
///////////////////////////
// const products = ["Laptop", "Phone", "Tablet"];
// products.push("watch");
// const removed = products.shift();
// products.unshift("camera");
// console.log(products.at(-1));

// for (const element of products) {
//   console.log(element);
// }
// const newArr = [...products];

// newArr.push("HeadPhones");
// for (const element of newArr) {
//   console.log(element);
// }
/********************************************************* */
//                                      Array Methods
// let arr = ["I", "study", "JavaScript", "right", "now"];
// // arr.splice(0, 3);
// // console.log(arr);

// arr.forEach((ele, index) => {
//   console.log(`${index} : ${ele}`);
// });

// const fruits = ["Apple", "Orange", "Mango"];
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });

// console.log(fruits.indexOf("Apple"));
// console.log(fruits.includes("Apple"));

// const products = [
//   { name: "Laptop", price: 30000 },
//   { name: "Phone", price: 15000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1200 },
// ];

// const product = products.find((prod) => {
//   return prod.price > 10000;
// });
// console.log(product);

// const customProducts = products.filter((prod) => {
//   return prod.price > 1000;
// });
// console.log(customProducts);

// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Yousef", age: 22 },
//   { name: "Omar", age: 25 },
//   { name: "Ahmed", age: 25 },
// ];

// const result = users.filter(
//   (user) => user.age >= 18 && user.name.startsWith("A"),
// );

// const namesArray = users.map((prod) => {
//   return prod.name;
// });
// console.log(namesArray);

// const numbersTest = [1, 2, 3];

// const updatedUsers = users.map((prod) => ({
//   name: prod.name,
//   age: prod.age * 2,
// }));
// console.log(updatedUsers);

// const numbers = [5, 10, 15];

// const result1 = numbers.reduce((sum, num) => sum + num, 0);

// console.log(result1);

// const totalPrice = products.reduce((sum, prod) => sum + prod.price, 0);
// console.log(totalPrice);

// function camelizie(str) {
//   return str
//     .split("-")
//     .map((word, index) => {
//       if (index == 0) {
//         return word;
//       }
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join("");
// }

// const arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   return arr.filter((val) => {
//     return val >= a && val <= b;
//   });
// }

// const filterArr = filterRange(arr, 1, 6);
// console.log(filterArr);

// const arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);

// function copySorted(arr) {
//   return [...arr].sort();
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((prod) => prod.name);

// alert(names); // John, Pete, Mary
// function getAverageAge(arr) {
//   const total = arr.reduce((acc, prod) => {
//     return acc + prod.age;
//   }, 0);
//   return total / arr.length;
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// const strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// function unique(arr) {
//   let result = [];
//   for (const element of arr) {
//     if (!result.includes(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// }

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = users.reduce((obj, ele) => {
//   obj[ele.id] = obj;
//   return obj;
// }, {});
// console.log(usersById);
// const str = "Hello";

// const iterator = str[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
