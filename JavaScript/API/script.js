// async function getProducts() {
//   try {
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/categories.php",
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data.categories);
//   } catch (error) {
//     console.error("Failed to fetch categories:", error);
//   }
// }

// getProducts();

let mealsContainer = document.querySelector("#meals-container");
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("click", () => {
  getRescipes(searchInput.value);
});
async function getRescipes(searchInput = "pizza") {
  try {
    mealsContainer.innerHTML = "";
    const response = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,
    );
    const data = await response.json();
    displayMeals(data.meals);

    data;
  } catch (error) {
    console.log(error);
  }
}
getRescipes();

function displayMeals(arr) {
  for (let i = 0; i < arr.length; i++) {
    mealsContainer.innerHTML += `
   <div class="col-md-3 p-4">
          <div class="inner">
          <img class='w-100 object-fit-cover' src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}">
            <p>${arr[i].strMeal}</p>
          </div>
        </div>
        `;
  }
}

// task
/*
const names = ["iliakan", "remy", "no-such-user-123"];

async function getUsers(names) {
  const jobs = names.map(async (name) => {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log("Status:", response.status);
        console.log("Message:", await response.text());
        return null;
      }
    } catch (error) {
      console.error(error);

      return null;
    }
  });
  return Promise.all(jobs);
}

getUsers(["iliakan", "remy"]).then((res) => {
  console.log(res);
});
*/
//
const form = document.querySelector("#profile-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  console.log(formData.get("username"));
  console.log(formData.get("email"));
  const avatar = formData.get("avatar");

  if (avatar instanceof File && avatar.size > 0) {
    console.log(avatar.name);
  }
});

//params
async function getParams() {
  const params = new URLSearchParams();

  params.set("search", "phone");
  params.set("page", "2");

  const response = await fetch(`/api/products?${params}`);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const products = await response.json();
}

// URL
const url = new URL("https://example.com/products?search=phone");

console.log(url.protocol); // "https:"
console.log(url.origin); // "https://example.com"
console.log(url.hostname); // "example.com"
console.log(url.pathname); // "/products"
console.log(url.search); // "?search=phone"

console.log(url.searchParams.get("search")); // "phone"

const base = "https://shop.example.com/products/";
const url3 = new URL("phones", base);

console.log(url3.href); // https://shop.example.com/products/phones

// search Params
const url4 = new URL("https://api.example.com/products");

url4.searchParams.set("category", "phones");
url4.searchParams.set("page", "2");

console.log(url4.href);
/*  * */
const url2 = new URL("https://example.com/products?category=phones&page=2");
url2.searchParams.set("search", "iphone 17");
console.log(url2.href);

// abort
const controller = new AbortController();

async function getProducts() {
  try {
    const response = await fetch("/api/products", {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const products = await response.json();
    console.log(products);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request was cancelled");
      return;
    }

    console.error("Failed to fetch products:", error);
  }
}

getProducts();

// في وقت لاحق، لو محتاجين نلغي الطلب:
controller.abort();

// Test

const urlTest = "https://jsonplaceholder.typicode.com/posts";

async function createPost() {
  try {
    const response = await fetch(urlTest, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello",
        body: "Second Hello",
        userId: "1",
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    console.log(response.status, " success ");

    console.log(data, "Data");
  } catch (error) {
    console.log(error);
  }
}
createPost();

//

const controller2 = new AbortController();

async function getPosts() {
  try {
    setTimeout(() => {
      controller2.abort();
    }, 1000);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller2.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data, "Data Cont");
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request Canceled");
    } else {
      console.error(error);
    }
  }
}

getPosts();
// Cancel the request
// controller2.abort();
