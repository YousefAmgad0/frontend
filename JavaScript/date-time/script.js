// const timestamp = Date.now();
// const date = new Date();

// console.log(timestamp);
// console.log(date);

/**** */
// const order = {
//   id: 101,
//   total: 2500,
//   createdAt: 1780000000000,
// };

// const date = new Date(order.createdAt);

// console.log(date);

// const date = new Date(2026, 9, 2);

// console.log(date.getDate());

// const date1 = new Date("2026-09-01");
// const date2 = new Date("2026-09-10");

// const difference = date2 - date1;
// const days = difference / (1000 * 60 * 60 * 24);

// console.log(days); // 9

// const createdAt = "2026-09-10T15:30:00";

// const date = new Date(createdAt);
// console.log(date.toLocaleDateString());

// const timestamp = Date.parse("2026-09-29");

// console.log(timestamp);

// const date = new Date("2026-09-29T15:00:00Z");
// console.log(date);

// const timestamp = date.getTime();
// console.log(timestamp);

// const order = {
//   createdAt: 1780000000000
// };

// const date1 = new Date(order.createdAt);
// console.log(date1.toLocaleDateString());

const date = new Date(2026, 9, 3, 3, 23);

function getWeekDay(date) {
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  return days[date.getDay()];
}
console.log(getWeekDay(date));

function getLocalDay(date) {
  return (date.getDay() + 6) % 7;
}

console.log(getLocalDay(date)); // 1

function getLastDayOfMonth(year, month) {
  const date2 = new Date(year, month + 1, 0);
  return date2.getDate();
}
console.log(getLastDayOfMonth(2026, 9)); // 31

function getSecondsToday() {
  const date = new Date();

  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
console.log(getSecondsToday());

function getSecondsToTomorrow() {
  const date = new Date();

  return (
    24 * 3600 -
    (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
  );
}

const date3 = new Date();
const timestamp2 = date.getTime();
const newDate2 = new Date(timestamp2);

console.log(timestamp2);
console.log(newDate2);

/****                                                                    */
const json = '{"name":"Yousef","age":23}';

const user = JSON.parse(json, (key, value) => {
  if (key === "age") {
    return value + 10;
  }

  return value;
});

console.log(user);

/*                          Task 1                      */

let user2 = {
  name: "John Smith",
  age: 35,
};

const json2 = JSON.stringify(user2);
console.log(json2);

const user3 = JSON.parse(json2);
console.log(user3);
