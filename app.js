const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Product List', products: [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 }
  ]});
});

app.get('/product/:id', (req, res) => {
  const products = {
    1: { name: 'Product A', price: 100, description: 'Description of Product A' },
    2: { name: 'Product B', price: 150, description: 'Description of Product B' },
    3: { name: 'Product C', price: 200, description: 'Description of Product C' }
  };
  const product = products[req.params.id];
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
