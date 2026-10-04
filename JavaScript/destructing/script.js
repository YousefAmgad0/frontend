// 2. Array Destructuring 🔥
// const arr = ["John", "Smith"];

// const [firstName, surname] = arr;

// console.log(firstName); // John
// console.log(surname); // Smith

// const options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
// };

// const {
//   size: { width, height },
//   items: [item1, item2],
// } = options;

// console.log(width);
// console.log(item1);

// function showMenu({ title = "Untitled", width = 200 } = {}) {
//   console.log(title);
//   console.log(width);
// }
// showMenu('lolo')

// const order = {
//   product: "Pizza",
//   address: "Giza",
//   deliveryTime: 30,
// };

// function showOrder({ product = "Pizaa", deliveryTime = 30 } = {}) {
//   console.log(product);
//   console.log(deliveryTime);
// }

// showOrder();

// function showUser({ name = "Guest", age = 18 } = {}) {
//   console.log(name);
//   console.log(age);
// }

// let user = {
//   name: "John",
//   years: 30,
// };

const { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for (const [key, val] of Object.entries(salaries)) {
    if (val > maxSalary) {
      maxSalary = val;
      maxName = key;
    }
  }
  return `${maxName} : ${maxSalary}`;
}
const test = topSalary(salaries);
console.log(test);
