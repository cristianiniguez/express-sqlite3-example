const { Router } = require('express');

const ProductsService = require('../services/products.services');
const productsService = new ProductsService();

const router = Router();

router.get('/', async (req, res) => {
  const products = await productsService.getProducts();
  res.send({ data: products, message: 'products listed' });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getProduct({ id });
  res.send({ data: product, message: 'product listed' });
});

router.post('/', async (req, res) => {
  const data = req.body;
  const createdProduct = await productsService.createProduct({ data });
  res.send({ data: createdProduct, message: 'product created' });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await productsService.updateProduct({ id, data });
  res.send({ message: 'product updated' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await productsService.deleteProduct({ id });
  res.send({ message: 'product deleted' });
});

module.exports = router;
