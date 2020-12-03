const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('getting products');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`getting product ${id}`);
});

router.post('/', (req, res) => {
  res.send('creating product');
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`updating product ${id}`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`deleting product ${id}`);
});

module.exports = router;
