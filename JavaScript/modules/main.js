import { getProductsCount, addProduct, products } from "./products.js";

import { fetchUser, role } from "./index.js";

console.log(role);

// main.js
async function loadUser() {
  const { default: getUser, role } = await import("./test.js");

  console.log(getUser()); // "Yousef"
  console.log(role); // "Frontend Developer"
}

loadUser();
