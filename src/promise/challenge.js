import fetch from "node-fetch";
const API = "https://fakestoreapi.com";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => console.log(error));

fetchData(`${API}/products/1`)
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
  });
