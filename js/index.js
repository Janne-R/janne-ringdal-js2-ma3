import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";

const productsUrl = baseUrl + "products";

/*const showProducts = (json) => {
  const container = document.querySelector(".product-container");

  results.forEach((product) => {
      container.innerHTML += `
                                <h4>${product.attributes.name}</h4>
    `;

    });

}*/

const getProducts = async () => {
  const container = document.querySelector(".product-container");
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    console.log(json);

    const results = json.data;

    results.forEach((product) => {
      container.innerHTML += `
                                <h4>${product.attributes.name}</h4>
    `;

    });



    //showProducts();

  } catch (error) {
    displayMessage("error", error, ".product-container");
  }

}

getProducts();

