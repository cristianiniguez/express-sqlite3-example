const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productsRoutes = require('./routes/products.routes');
const { logErrors, wrapErrors, errorHandlers } = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productsRoutes);

// 404 not found
app.use(notFoundHandler);

// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandlers);

module.exports = app;
