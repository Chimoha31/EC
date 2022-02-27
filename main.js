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

    const div_btn = document.createElement("div");
    div_btn.setAttribute("class", "btn_heart");
    // Add to cart Button 
    div_btn.insertAdjacentHTML(
      "afterbegin",
      '<button class="cart_btn">Add to Cart</button>'
    );
    // favorite Button
    div_btn.insertAdjacentHTML(
      "beforeend",
      '<button class="ht_btn">Favorite<sapn class="fas fa-heart"></sapn></button>'
    );
    dom_container.appendChild(div_btn);
  });

  // 1.Change heart color to red when clicked
  // 2.Change heart number in header everytime fav btn is clicked
  // 3.Count plus when heart is red, Minus when heart click again to unmark.
  // 1.
  const favBtnAll = document.querySelectorAll('.ht_btn');
  const heartIconAll = document.querySelectorAll('.fas.fa-heart');
  // 2.
  const heartIconNum = document.querySelector('.far.fa-heart');
  let heartCount = 0;
  // 1, 2 & 3
  for(let i = 0; i < favBtnAll.length; i++) {
    favBtnAll[i].addEventListener('click', function() {
      if(heartIconAll[i].classList.toggle('heart_color')){
        heartIconNum.textContent = heartCount + 1;       
        heartCount++;
      }else {
        heartIconNum.textContent = heartCount - 1;       
        heartCount--;
      }
    });
  }
  
 //1.Change cart number in header everytime cart btn is clicked
  const cartBtnAll = document.querySelectorAll('.cart_btn');
  const cartIconNum = document.querySelector('.fa-cart-arrow-down');
  let cartCount = 0;

  for(let i = 0; i < cartBtnAll.length; i++) {
    cartBtnAll[i].addEventListener('click', function() {
      cartIconNum.textContent = cartCount + 1;
      cartCount++;
    });
  }
  
  console.log(products_container);
}

callAPI();

