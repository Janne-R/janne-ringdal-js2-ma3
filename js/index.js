import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { createMenu } from "./common/createMenu.js";

const productsUrl = baseUrl + "products";

createMenu();

const showProducts = (results) => {
  const container = document.querySelector(".product-container");

  results.forEach((product) => {
    container.innerHTML += `<div class="products">
                                <h4>${product.attributes.name}</h4>
                                <p> ${product.attributes.description}</p>
                                </div>
    `;

  });

}

const getProducts = async () => {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    console.log(json);

    const results = json.data;
    return results;

  } catch (error) {
    displayMessage("error", error, ".product-container");
  }

}

const products = await getProducts();
showProducts(products);



