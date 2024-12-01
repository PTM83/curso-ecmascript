// Llamar a una API fakeapi - platzi
// https://fakeapi.platzi.com
// npm install node-fetch Para hacer llamados de fetch desde el lado de node
import fetch from 'node-fetch';

const response = await fetch('https://api.escuelajs.co/api/v1/products')
// .then(data => data.json())

const products = await response.json()

// console.log(products)

export { products }