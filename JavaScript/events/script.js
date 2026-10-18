// addEventListener
// const box = document.querySelector("#box");

// const handler = {
//   handleEvent(event) {
//     if (event.type === "mousedown") {
//       box.textContent = "Mouse button pressed";
//     }

//     if (event.type === "mouseup") {
//       box.textContent = "Mouse button released";
//     }
//   },
// };

// box.addEventListener("mousedown", handler);
// box.addEventListener("mouseup", handler);

/*                      */

function handler() {
  alert("click");
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("enter");
});

// Task 1
const hideBtn = document.querySelector("#hideBtn");
const text = document.querySelector("#text");

hideBtn.addEventListener("click", () => {
  text.hidden = true;
});

// Task 2
const hideBtn2 = document.querySelector("#hideBtn2");
hideBtn2.addEventListener("click", () => {
  hideBtn2.hidden = true;
});

//Task 4
const field = document.querySelector("#field");
const ball = document.querySelector("#ball");

field.addEventListener("click", (event) => {
  const rect = field.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const ballX = Math.max(
    0,
    Math.min(x - ball.offsetWidth / 2, field.clientWidth - ball.offsetWidth),
  );

  const ballY = Math.max(
    0,
    Math.min(y - ball.offsetHeight / 2, field.clientHeight - ball.offsetHeight),
  );

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
});

//Task 5

const menuTitle = document.querySelector("#menuTitle");
const menuList = document.querySelector("#menuList");
menuTitle.addEventListener("click", () => {
  menuList.classList.toggle("open");
});

//Task 6
const messages = document.querySelectorAll(".message");
messages.forEach((message) => {
  const btn = document.createElement("button");
  btn.textContent = "×";
  btn.classList.add("close");
  btn.addEventListener("click", () => {
    message.remove();
  });
  message.append(btn);
});
// Task 7

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const track = document.querySelector("#track");

const slideWidth = slides[0].offsetWidth;
const step = slideWidth + 10;

let position = 0;
const maxPosition = slides.length - 3;

nextBtn.addEventListener("click", () => {
  if (position < maxPosition) {
    position++;
    track.style.transform = `translateX(-${position * step}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (position > 0) {
    position--;
    track.style.transform = `translateX(-${position * step}px)`;
  }
});

/*                                         */
const form = document.querySelector("#form");
const box = document.querySelector("#box");
const text2 = document.querySelector("#text2");

form.addEventListener("click", () => {
  console.log("FORM");
});

box.addEventListener("click", () => {
  console.log("DIV");
});

text2.addEventListener("click", () => {
  console.log("P");
});
/** */
const parent = document.querySelector("#parent");

parent.addEventListener("click", (event) => {
  console.log("target:", event.target);
  console.log("currentTarget:", event.currentTarget);
});

/**                                                */
const products2 = document.querySelector("#products2");

products2.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (btn && products2.contains(btn)) {
    console.log(`button clicked : ${btn.textContent}`);
  }
});
