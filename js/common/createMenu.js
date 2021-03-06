import { getUsername } from "../utils/storage.js";

export const createMenu = () => {
  const { pathname } = document.location;

  const username = getUsername();
  let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

  if (username) {
    authLink = `<span>Hi ${username}</span>`
  }

  const container = document.querySelector(".menu-container");

  container.innerHTML = `
                      <div class="menu">
                      <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                      ${authLink}
                      </div>
`;
}