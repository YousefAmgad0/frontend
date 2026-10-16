// console.log(window);
// let table = document.getElementById("table");
// console.log(table.rows);

// const { createElement } = require("react");

// console.log(document.body.children[1]);
// console.log(document.body.children[2].lastElementChild.innerHTML);

// const btns = document.querySelectorAll(".buy-btn");
// for (const btn of btns) {
//   console.log(btn);
// }

/*
The table with id="age-table".
All label elements inside that table (there should be 3 of them).
The first td in that table (with the word “Age”).
The form with name="search".
The first input in that form.
The last input in that form.
*/
// const ageTable = document.getElementById("age-table");
// const labelTables = table.getElementsByTagName("label");
// const form = document.querySelectorAll('form[name="search"]');
// const formInp = document.querySelector('input');

// console.log(document.getElementsByTagName("li").length);
// console.log(document.getElementsByTagName("li"));
// const listData = document.getElementsByTagName("li");

// for (const li of listData) {
//   console.log(li.firstChild.textContent);
// }

// const input = document.querySelector("input");

// // Attribute → Property
// input.setAttribute("id", "user");
// console.log(input.id); // "user"

// // Property → Attribute
// input.id = "admin";
// console.log(input.getAttribute("id")); // "admin"

// const checkBox = document.querySelector("#terms");
// console.log(checkBox.getAttribute("checked"));
// console.log(checkBox.checked);

// const box = document.querySelector("#box");
// console.log(box.attributes);
// console.log(box.getAttribute("style"));
// console.log(box.style);
// box.style.cursor = "pointer";

// const order = document.querySelector("#order");
// order.style.padding = "5rem";
// order.style.color = "red";

// order.dataset.orderState = "Done";
// console.log(order.dataset.orderState);

// const menu = document.querySelector("[data-widget-name]");

// console.log(menu.dataset.widgetName);

// const links = document.querySelectorAll("a");

// for (const link of links) {
//   const href = link.getAttribute("href");
//   if (href && href.includes("://") && !href.startsWith("http://internal.com")) {
//     link.style.color = "orange";
//   }
// }

// const card = document.createElement("div");

// card.className = "product-card";
// card.textContent = "Headphones";

// document.body.append(card);

// const paragraph = document.createElement("p");
// const text = document.createTextNode("Hello");

// paragraph.append(text);
// document.body.append(paragraph);

// const list = document.querySelector("#list");

// const menu = document.querySelector("#menu");
// const item = document.createElement("li");
// item.textContent = "Contact";
// menu.prepend(item);

// const item = document.createElement("li");
// item.textContent = "Contact";
// menu.prepend(item);

/********************************************************* */
// Fragment

// const fragment = new DocumentFragment();

// for (let i = 1; i <= 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = `product ${i}`;
//   fragment.append(li);
// }
// document.querySelector("#products").append(fragment);

// const card = document.querySelector("#card");
// card.style.background = "red";
// card.style.padding = "2rem";
// card.insertAdjacentHTML(
//   "beforeend",
//   '<button class="buy-btn">Buy Now</button>',
// );
// card.insertAdjacentHTML("afterbegin", "<p>Maiven</p>");

// //
// const menu2 = document.querySelector("#list");

// while (true) {
//   const text = prompt("Enter Text");

//   if (text === null || text.trim() === "") {
//     break;
//   }

//   const li = document.createElement("li");
//   li.textContent = text;
//   menu2.append(li);
// }

/*********************************************/
const data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};
function createTree(container, data) {
  const ul = document.createElement("ul");

  for (const key in data) {
    const li = document.createElement("li");
    li.textContent = key;

    const children = data[key];

    if (Object.keys(children).length > 0) {
      createTree(li, children);
    }

    ul.append(li);
  }

  if (ul.children.length > 0) {
    container.append(ul);
  }
}
const ul2 = document.querySelector("#list");
createTree(ul2, data);

/** */
const items = document.querySelectorAll("li");

for (const li of items) {
  const count = li.querySelectorAll("li").length;

  if (count > 0) {
    li.firstChild.nodeValue += ` (${count})`;
  }
}

const heading1 = document.querySelector("#heading");
const parg = document.createElement("p");
parg.textContent = "yarab waf2ni";
heading1.append(parg);

document.body.style.backgroundColor = "red";

setTimeout(() => {
  document.body.style.removeProperty("background-color");
}, 1500);

function showNotification(options) {
  const div = document.createElement("div");
  div.classList.add("notification");
  div.innerHTML = options.html;

  if (options.className) {
    div.classList.add(options.className);
  }

  div.style.position = "fixed";
  div.style.top = `${options.top ?? 0}px`;
  div.style.right = `${options.right ?? 0}px`;

  document.body.append(div);

  setTimeout(() => {
    div.remove();
  }, 1500);
}

showNotification({
  top: 10,
  right: 10,
  html: "Hello JOOOOOO!",
  className: "welcome",
});

// Element Size and Scrolling
const box = document.querySelector("#box");

console.log(box.offsetParent.id); // "main"
console.log(box.offsetLeft);      // 180
console.log(box.offsetTop);       // 100

const example = document.querySelector("#example");

console.log(example.offsetWidth);  // 390
console.log(example.offsetHeight); // 290