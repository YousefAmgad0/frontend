// // let admin;
// // let name;
// // name = "john";
// // admin = name;
// // console.log(admin);
// // const product = "LG";
// // const number = 15000;
// // //
// // const obj = {
// //   val: 20,
// //   name: "Youssef",
// // };
// // /* / Type Conversion  */
// // const age = 22;
// // const textAge = String(age);
// // console.log(typeof textAge, "Type-Conversion-String"); // "Type Conversion  >>  string"

// // /* Falsy an Truthy value */
// // if ("") {
// //   console.log("Runs");
// // }

// // /* */

// // const input = prompt("Enter Your Age");
// // if (input === null) {
// //   console.log("user Canceled");
// // } else {
// //   console.log(Number(input), "Test Age");
// // }

// // console.log(`Product is ${product} cost ${number}`);
// // console.log(10 / 0); // Infinity
// // console.log(typeof NaN);
// // console.log(typeof null);

// // console.log(
// //   "عشان كده في الـ real project لازم تعمل validation قبل أو مع التحويل.",
// // );

// // console.log(Number(null));
// // console.log(Number(undefined));

// // const test = Number("Hello");
// // Number.isNaN(test);

// // /*                                                                       */
// // let nume = 10 > 5 ? console.log(true) : console.log(false);

// // /*     tasks on id cond            */
// // let num2 = Number(prompt("enter number to check"));
// // if (num2 == 0) {
// //   console.log("Equal 0 ");
// // } else if (num2 >= 0) {
// //   console.log(" > 0");
// // } else {
// //   console.log("Negative Num");
// // }
// // /*                   Task                              */

// // let userName = prompt("Enter user name", "Admin");
// // if (userName === "Admin") {
// //   let password = prompt("Enter Your password");

// //   if (password === null) {
// //     alert("Canceled !");
// //   } else if (password === "TheMaster") {
// //     alert("Welcome !");
// //   } else {
// //     alert("Wrong Password");
// //   }
// // } else if (userName === "" || userName === null) {
// //   alert("Canceled");
// // } else {
// //   alert("I dont know you");
// // }

// // for (let i = 2; i <= 10; i += 2) {
// //   alert(i);
// // }

// /*      Example switch       */
// const role = "admin";
// switch (role) {
//   case "admin":
//     console.log("Full access");
//     break;

//   case "editor":
//     console.log("Edit access");
//     break;

//   case "user":
//     console.log("Basic access");
//     break;

//   default:
//     console.log("Unknown role");
// }
// // مثال تاني
// const status = "loading";

// switch (status) {
//   case "loading":
//     console.log("Show spinner");
//     break;

//   case "success":
//     console.log("Show data");
//     break;

//   case "error":
//     console.log("Show error message");
//     break;

//   default:
//     console.log("Unknown status");
// }
// function sum(x, y) {
//   return x + y;
// }
// const total = sum(10, 20);
// console.log(total, "total");

// function sayHello() {
//   let username = "Ahmed";

//   console.log(username);
// }
// let username = "Yousef";

// sayHello();

// // *********************************
// function minElement(x, z) {
//   if (x >= z) {
//     return z;
//   }
//   return x;
// }
// function maxElement(x, z) {
//   return x >= z ? x : z;
// }
// const maxel = maxElement(10, 8);

// const minel = minElement(10, 8);
// console.log(minel, "Min Element");
// console.log(maxel, "Max Element");
// // ************************************
// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// const powe = pow(2, 4);
// console.log(powe);
// //********************************* */

// const sum2 = (x, z) => x + z;
// console.log(sum2(10, 20));
/************************************************ */
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed.");
//   },
//   () => {
//     alert("You canceled the execution.");
//   },
// );
/**************************************************** */
// const square = (n) => n * n;
// console.log(square(20));
/**************************************************** */
const sName = prompt("enter name", "yousef");
const ageInput = prompt("Enter age", "22");
const age = ageInput === null ? null : +ageInput;
const gradeInput = prompt("enter grade", "99");
const grade = gradeInput === null ? null : +gradeInput;
const isActive = confirm("Is Student Active");
let eligibility;
//4
if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}
//5
// 6
if (age >= 18 && isActive === true) {
  eligibility = "Eligible";
} else {
  eligibility = "Not Eligible";
}
//7
let nickName = sName ?? "guest";
//8
const getAge = age < 18 ? "minor" : "adult";
//9
function calculateResult(grade) {
  if (grade >= 90) {
    return "Excellent";
  } else if (grade >= 80) {
    return "Very Good";
  } else if (grade >= 70) {
    return "Good";
  } else if (grade >= 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}
const result = grade === null ? null : calculateResult(grade);
//10
const getStatus = () => (isActive ? "Active" : "inActive");

const printStatus = () => ({
  nickName: nickName ?? "guest",
  studentName: sName ?? "guest",
  studentAge: age ?? "Enter age not cancel",
  studentstatus: getAge,
  studentgrade: result ?? "Enter Your Grade, Not Cancel",
  studentActive: getStatus(),
  studentEligibility: eligibility,
});

const report = printStatus();
console.log(report);
