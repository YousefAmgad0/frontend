/*
const promise = new Promise((resolve, reject) => {
  resolve("Download complete!");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Operation finished");
  });
*/
// Promise.resolve(5)
//   .then((number) => {
//     return number * 2;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// }

// delay(3000).then(() => {
//   console.log("Runs after 3 seconds");
// });

// *********************************
// Promise.resolve(5)
//   .then(
//     (result) => {
//       throw new Error("Failed");
//     },
//     (error) => {
//       console.log("First handler:", error.message);
//     },
//   )
//   .catch((error) => {
//     console.log("Catch:", error.message);
//   });

// Promise.resolve(5)
//   .then(() => {
//     throw new Error("Invalid value");
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log(error.message); //Invalid value
//   })
//   .catch((error) => {
//     console.log(error.message); //Invalid value
//     return "Error handled";
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Second catch:", error.message); //Second catch: Error handled
//   });

// Promise.resolve({ name: "yousef", age: 22 })
//   .then((user) => {
//     return user.name;
//   })
//   .then((name) => console.log(name));

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => resolve("Products"), 3000);
// });

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => resolve("Categories"), 1000);
// });

// const promise3 = new Promise((resolve) => {
//   setTimeout(() => resolve("Brands"), 2000);
// });

// Promise.all([promise1, promise2, promise3]).then((results) => {
//   console.log(results);
// });

// async function getNumber() {
//   return 1;
// }

// console.log(getNumber()); // Promise

// async function getNumber() {
//   return 1;
// }

// getNumber().then((value) => {
//   console.log(value); // 1
// });

// // Using then
// Promise.resolve(10).then((value) => {
//   console.log(value);
// });

// // Using await
// async function showNumber() {
//   const value = await Promise.resolve(10);
//   console.log(value);
// }

// showNumber();

// async function showAvatar() {
//   // 1. Get user data
//   const response = await fetch(
//     "/article/promise-chaining/user.json"
//   );

//   const user = await response.json();

//   // 2. Get GitHub user
//   const githubResponse = await fetch(
//     `https://api.github.com/users/${user.name}`
//   );

//   const githubUser = await githubResponse.json();

//   // 3. Show avatar
//   const img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   document.body.append(img);

//   // 4. Wait 3 seconds
//   await new Promise(resolve => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

//      ده الصح
// async function loadUser() {
//   try {
//     const response = await fetch("/users/1");
//     const user = await response.json();

//     console.log(user);
//   } catch (error) {
//     console.error("Failed to load user:", error);
//   }
// }

// async function getData() {
//   const result = await Promise.reject(new Error("Request failed"));

//   return result;
// }

// getData().catch((error) => {
//   console.log(error.message);
// });

// // Task 1
// async function loadJson(url) {
//   const response = await fetch(url);

//   if (response.status === 200) {
//     return response.json();
//   }

//   throw new Error(response.status);
// }

// loadJson("https://javascript.info/no-such-user.json")
//   .catch(console.log);


// Task 2  
/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  }

  throw new HttpError(response);
}

async function demoGithubUser() {
  let user;

  while (true) {
    const name = prompt("Enter a name?");

    try {
      user = await loadJson(
        `https://api.github.com/users/${name}`
      );

      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status === 404) {
        alert("No such user, please reenter.");
      } else {
        throw err;
      }
    }
  }

  alert(`Full name: ${user.name}`);

  return user;
}

demoGithubUser();
*/
