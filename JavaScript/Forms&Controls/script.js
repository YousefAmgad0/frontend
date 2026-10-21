const form = document.forms.loginForm;

const username = form.elements.username;

console.log(username.value); // Yousef
//registerForm
console.log(document.forms.registerForm.elements.email.value);

//profileForm
const form2 = document.forms.profileForm;

console.log(form2.elements.username.value);
console.log(form2.elements.country.value);
console.log(form2.elements.bio.value);

//genres2Form
const genres2 = document.querySelector("#genres2");
console.log(genres2.options[genres2.selectedIndex].textContent);
console.log(genres2.options[genres2.selectedIndex].value);

const newOption = new Option("Classic", "classic");
genres2.append(newOption);
newOption.selected = true;
//focus and blur
const email2 = document.querySelector("#email2");
const error = document.querySelector("#error");

email2.addEventListener("focus", () => {
  error.textContent = "";
});

email2.addEventListener("blur", () => {
  if (!email2.value.includes("@")) {
    error.textContent = "Please enter a valid email2.";
  }
});

//second ex
const username2 = document.querySelector("#username2");
const edit = document.querySelector("#edit");

edit.addEventListener("click", () => {
  username2.focus();
});

const box = document.querySelector("#boxTest");

box.focus();

// focusin -- focusout
formTest.addEventListener("focusin", () => {
  formTest.classList.add("focused");
});

formTest.addEventListener("focusout", () => {
  formTest.classList.remove("focused");
});

//Task 1
const text3 = document.querySelector("#text3");

text3.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  textarea.value = text3.textContent;
  text3.replaceWith(textarea);

  textarea.addEventListener("blur", () => {
    text3.textContent = textarea.value;
    textarea.replaceWith(text3);
  });
  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      textarea.blur();
    }
  });
});
//Task 2
const table = document.querySelector("#bagua-table");

let editingCell = null;

table.addEventListener("click", (event) => {
  const cell = event.target.closest("td");

  if (!cell || !table.contains(cell)) return;

  // لو فيه خلية تحت التعديل، متفتحش محرر جديد
  if (editingCell) return;

  editingCell = cell;

  const oldText = cell.textContent;

  const editor = document.createElement("div");
  editor.className = "editor";

  const textarea = document.createElement("textarea");
  textarea.value = oldText;

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  const okButton = document.createElement("button");
  okButton.textContent = "OK";

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";

  buttons.append(okButton, cancelButton);
  editor.append(textarea, buttons);

  cell.replaceChildren(editor);

  textarea.focus();

  function finishEditing(save) {
    if (save) {
      cell.textContent = textarea.value;
    } else {
      cell.textContent = oldText;
    }

    editingCell = null;
  }

  okButton.addEventListener("click", () => {
    finishEditing(true);
  });

  cancelButton.addEventListener("click", () => {
    finishEditing(false);
  });

  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      finishEditing(false);
    }

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      finishEditing(true);
    }
  });
});

//Task 3
const mouse = document.querySelector("#mouse");
const field = document.querySelector("#field");

let x = 0;
let y = 0;

const step = 10;

field.addEventListener("keydown", (e) => {
  const maxX = field.clientWidth - mouse.offsetWidth;
  const maxY = field.clientHeight - mouse.offsetHeight;

  if (e.key === "ArrowRight") {
    x = Math.min(x + step, maxX);
  }

  if (e.key === "ArrowLeft") {
    x = Math.max(x - step, 0);
  }

  if (e.key === "ArrowDown") {
    y = Math.min(y + step, maxY);
  }

  if (e.key === "ArrowUp") {
    y = Math.max(y - step, 0);
  }

  mouse.style.left = `${x}px`;
  mouse.style.top = `${y}px`;
});
//Day 30 — Events: change, input, cut, copy, paste
const nameInput = document.querySelector("#name");

nameInput.addEventListener("change", () => {
  console.log(nameInput.value);
});

const country2 = document.querySelector("#country2");

country2.addEventListener("change", () => {
  console.log(country2.value);
});

//
const username3 = document.querySelector("#username3");
const result = document.querySelector("#result");

username3.addEventListener("input", () => {
  result.textContent = username3.value;
});
//
const message4 = document.querySelector("#message4");

message4.addEventListener("copy", (event) => {
  console.log("Text copied!");
});

message4.addEventListener("cut", (event) => {
  console.log("Text cut!");
});

message4.addEventListener("paste", (event) => {
  console.log("Text pasted!");
});

//Task 1

const money = document.querySelector("#money");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const result3 = document.querySelector("#result3");

const heightBefore = document.querySelector("#height-before");
const heightAfter = document.querySelector("#height-after");

function calculate() {
  const totalMoney = Number(money.value);
  const totalInterest = Number(interest.value) / 100;
  const totalYears = Number(years.value);

  const finalAmount = totalMoney * (1 + totalInterest) ** totalYears;

  result3.textContent = Math.round(finalAmount);

  // Update chart heights
  heightBefore.style.height = `${totalMoney / 100}px`;
  heightAfter.style.height = `${finalAmount / 100}px`;
}

money.addEventListener("input", calculate);
interest.addEventListener("input", calculate);
years.addEventListener("change", calculate);

calculate();
//
const loginFormTest = document.querySelector("#loginFormTest");

loginFormTest.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted!");
});
// Task
const coverDiv = document.querySelector("#cover-div");
const promptForm = document.querySelector("#prompt-form");
const promptMessage = document.querySelector("#prompt-message");
const promptInput = document.querySelector("#prompt-input");
const cancelButton = document.querySelector("#cancel");

function showPrompt(html, callback) {
  promptMessage.innerHTML = html;
  promptInput.value = "";

  coverDiv.hidden = false;
  promptForm.hidden = false;
  promptInput.focus();

  promptForm.onsubmit = function (event) {
    event.preventDefault();

    promptForm.hidden = true;
    coverDiv.hidden = true;

    callback(promptInput.value);
  };

  cancelButton.onclick = function () {
    promptForm.hidden = true;
    coverDiv.hidden = true;

    callback(null);
  };
}

showPrompt("Enter something:", function (value) {
  alert(value);
});
