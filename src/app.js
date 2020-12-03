const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productsRoutes = require('./routes/products.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/products', productsRoutes);

module.exports = app;