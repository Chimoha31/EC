"use strict";

// ----------------------
// API DOM
// ----------------------
async function callAPI() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log(products);

  // DOM
  const products_container = document.querySelector("#products_container");
  products.map((product) => {
    // 各itemを囲うcontainer
    const dom_container = document.createElement("div");
    dom_container.setAttribute("class", "dom_container");
    products_container.appendChild(dom_container);

    // Item img
    const div = document.createElement("div");
    div.setAttribute("class", "item");
    const img = document.createElement("img");
    img.setAttribute("src", `${product.image}`);
    div.appendChild(img);
    dom_container.appendChild(div);

    // Item title
    const h4 = document.createElement("h4");
    h4.textContent = product.title;
    div.appendChild(h4);

    // Item price
    const p = document.createElement("p");
    p.textContent = `$ ${product.price}`;
    div.appendChild(p);

    // button and heart
    const div_btn = document.createElement("div");
    const btn = document.createElement("button");
    div_btn.setAttribute("class", "btn_heart");
    div_btn.appendChild(btn);
    btn.textContent = "Add to Cart";
    div_btn.insertAdjacentHTML(
      "beforeend",
      '<button class="ht_btn">Favorite<sapn class="fas fa-heart"></sapn></button>'
    );
    dom_container.appendChild(div_btn);
  });

  // Change heart color to red when clicked
  const btnAll = document.querySelectorAll('.ht_btn');
  const heartIconAll = document.querySelectorAll('.fas.fa-heart');
 
  for(let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener('click', function() {
      heartIconAll[i].classList.toggle('heart_color');
    })
  }


  console.log(products_container);
}

callAPI();

