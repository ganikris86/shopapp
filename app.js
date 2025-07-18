const express = require('express');
const path = require('path');
const productService = require('./services/productService');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  const products = productService.getAllProducts();
  res.render('index', { title: 'Shop App', products });
});

app.get('/product/:id', (req, res) => {
  const product = productService.getProductById(parseInt(req.params.id));
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.render('product', { title: product.name, product });
});

app.get('/cart', (req, res) => {
  res.render('cart', { title: 'Your Cart' });
});

app.get('/purchase', (req, res) => {
  res.render('purchase', { title: 'Purchase Confirmation' });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
