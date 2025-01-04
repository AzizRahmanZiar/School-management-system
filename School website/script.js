const form = document.getElementById("form");
const firstName = document.getElementById("نوم");
const lastName = document.getElementById("تخلص");
const email = document.getElementById("ایمیل");
const password = document.getElementById("کود");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "ایمیل اعتبار نه لري");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id} باید ولیکئ`);
    } else {
      showSuccess(input);
    }
  });
}

function checklength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} باید ${min} حرف وي`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} باید د ${max} حرف کم وي`);
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([firstName, lastName, email, password]);
  checklength(firstName, 5, 15);
  checklength(lastName, 10, 15);
  checkEmail(email);
});
