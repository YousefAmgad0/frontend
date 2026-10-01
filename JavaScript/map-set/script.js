// const userMap = new Map();

// userMap.set("name", "Yousef");
// userMap.set("age", 23);
// userMap.set("role", "Frontend Developer");

// for (const [key, value] of userMap) {
//   console.log(key);
//   console.log(value);
// }

// function unique(arr) {
//   return [...new Set(arr)];
// }

// let values = [
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

// console.log(unique(values));
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  const map = new Map();

  for (const word of arr) {
    const key = word.toLowerCase().split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, word);
    }
  }

  return [...map.values()];
}
console.log(aclean(arr));

const weakMap = new WeakMap();

const user = {};

weakMap.set(user, "User Data");

console.log(weakMap.get(user)); // User Data
console.log(weakMap.has(user)); // true

weakMap.delete(user);

console.log(weakMap.has(user)); // false
