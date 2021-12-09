import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { createMenu } from "./common/createMenu.js";

const form = document.querySelector("form");

createMenu();

const doLogin = async (username, password) => {
  const url = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/";
    }

    if (json.error) {
      displayMessage("warning", "Invalid login details", ".message-container");
    }
  }
  catch (error) {
    console.log(error);

  }
}

const submitForm = (event) => {
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const message = document.querySelector(".message-container");

  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Values missing", ".message-container");
  }

  doLogin(usernameValue, passwordValue);

}

form.addEventListener("submit", submitForm);