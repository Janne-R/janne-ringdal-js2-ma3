const form = document.querySelector("form");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}


function validateForm(event) {
  event.preventDefault();

  if (checkLength(username.value, 0)) {
    usernameError.style.display = "none";
  } else {
    usernameError.style.display = "block";
  }

  if (checkLength(password.value, 0)) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

}

form.addEventListener("submit", validateForm);