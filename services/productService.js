const path = require('path');
const fs = require('fs');

const productFile = path.join(__dirname, '..', 'db', 'product.json');

function getAllProducts() {
  return JSON.parse(fs.readFileSync(productFile, 'utf8'));
}

function getProductById(id) {
  const products = getAllProducts();
  return products.find(p => p.id === id);
}

module.exports = {
  getAllProducts,
  getProductById
};