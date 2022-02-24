'use strict';


// ----------------------
// API DOM
// ----------------------
async function callAPI() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);
  
  const products_container = document.querySelector('#products_container');
  products.map((product) => {
    // Item img
    const div = document.createElement('div');
    div.setAttribute('class', 'item')
    const img = document.createElement('img');
    img.setAttribute('src', `${product.image}`);
    div.appendChild(img);
    products_container.appendChild(div);
    
    // Item title
    const h4 = document.createElement('h4');
    h4.textContent = product.title;
    div.appendChild(h4);

    // Item price
    const p = document.createElement('p');
    p.textContent = `$ ${product.price}`;
    div.appendChild(p);
  })
  console.log(products_container);
}

callAPI();