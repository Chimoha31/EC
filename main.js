'use strict';

const products_container = document.querySelector('#products_container');

// ----------------------
// API 取得
// ----------------------
async function callAPI() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);

  products.map((product) => {
    const img_div = document.createElement('div');
    const img = document.createElement('img');
    img_div.appendChild(img);
    img.setAttribute('src', `${product.image}`);
    products_container.appendChild(img_div);
    console.log(products_container);
  })

}

callAPI();