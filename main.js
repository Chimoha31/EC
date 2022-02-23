'use strict';

const products_container = document.querySelector('#products_container');
const image_div = document.querySelector('#image');
const products_detail = document.querySelector('#products_detail')
const detail_div = document.createElement('div');


async function callAPI() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);
}

callAPI();