// const user = {
//   name: "john",
//   surname: "Smith",
// };
// user.name = "pete";
// delete user.surname;
// /**
//  *
//  */

// const schedule = {};

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false
// function isEmpty(obj) {
//   for (const key in obj) {
//     return false;
//   }
//   return true;
// }
// /**
//  *
//  */
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// /************* */
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (const key in object) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// /*************************** */

/**                                                      */

/************************                    */
// let ladder = {
//   step: 0,

//   up() {
//     this.step++;
//     return this;
//   },

//   down() {
//     this.step--;
//     return this;
//   },

//   showStep() {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().up().showStep();

/*************************************************************************** */

// function Calculator(a, b) {
//   this.read = function () {
//     this.a = +prompt("Enter Num1", 2);
//     this.b = +prompt("Enter Num2", 2);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// const calc = new Calculator(2, 2);

// calc.read();

// console.log(calc.sum());
// console.log(calc.mul());
/*************** */
// function Acc(startVal) {
//   this.value = startVal;

//   this.read = function () {
//     this.value += +prompt("Enter Numbers To Accumlators", 0);
//   };
// }
// const acc = new Acc(1);

// acc.read();
// acc.read();
// acc.read();

// console.log(acc.value);
/******************************************************* */
const users = [
  {
    id: 1,
    name: "Yousef",
    age: 22,
    role: "Frontend Developer",
    address: {
      city: "Cairo",
    },
    skills: {
      html: true,
      css: true,
      javascript: true,
    },
  },
  {
    id: 2,
    name: "Ahmed",
    age: 24,
    role: "Backend Developer",
    address: null,
    skills: {
      node: true,
      mongodb: true,
    },
  },
];

const key = "role";
//Part 1
console.log(users[0].name, "name user 1");
console.log(users[0][key], "Bracket Notation");
users[0].isActive = true;
console.log(users[0].isActive, "New Property");
//Part 2
function getUserProperty(user, key) {
  return user[key];
}
const tet = getUserProperty(users[0], "name");
console.log(tet);

//Part 3
for (const key in users[0]) {
  console.log(key + " : " + users[0][key]);
}
/**************************************************** */
//part 4
const usr = { ...users[0] };
usr.name = "Mohamed";
console.log(usr.name);

usr.skills.javascript = false;
console.log(users[0].skills.javascript);
// اتغيرت لان انا عاملshalow copy
//Part 5
const userProfile = {
  name: "Yousef",
  age: 22,
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};
userProfile.introduce();
//Part 6
function User(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
  this.introduce = function () {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old and My Role ${this.role}`,
    );
  };
}
const user1 = new User("Yousef", 22, "Frontend Developer");
const user2 = new User("Ahmed", 24, "Backend Developer");

user1.introduce();
user2.introduce();
//Part 7
users[1].address?.city;
//part 8
/*
السؤال الاول
الفرق ان اول واحده بعمل access عن طريق ال dot Notation
التاني
عن طريق ال Bracket Notation
السؤال التاني
مسموح لان انا بضيف ptoperty لل object بتاعي عادي
السؤال التالت
هيتغير لان انا عامل refrence Copy فاهيبقو مشاورين علي نفس ال Address لل variable الي اسمه Name
السؤال الرابع
اول واحد كده انا بحمي ال user لو undefined بيحمي من ال type error 
قبل مايكمل علي ال Address
 لكن التاني بيحمي ال user , address لو حاجه منهم ب Null , undefined فابيحمي 
 انه ميديش Type Error
السؤال الخامس
this ===user

وفي ال 
🚨 آخر Challenge — Professional Thinking
هنستخدم
structuredClone

*/
