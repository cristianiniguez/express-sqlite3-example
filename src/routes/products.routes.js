const { Router } = require('express');

const ProductsService = require('../services/products.services');
const productsService = new ProductsService();

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await productsService.getProducts();
    res.send({ data: products, message: 'products listed' });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await productsService.getProduct({ id });
    res.send({ data: product, message: 'product listed' });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const data = req.body;
  try {
    const createdProduct = await productsService.createProduct({ data });
    res.send({ data: createdProduct, message: 'product created' });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await productsService.updateProduct({ id, data });
    res.send({ message: 'product updated' });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await productsService.deleteProduct({ id });
    res.send({ message: 'product deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
