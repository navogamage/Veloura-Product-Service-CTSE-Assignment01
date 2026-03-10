const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const validateProduct = require('../middleware/validateProduct');
const upload = require('../config/multer');

router.post('/', upload.single('image'), validateProduct, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', upload.single('image'), validateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.patch('/:id/stock', productController.deductStock);
router.patch('/:id/stock/restore', productController.restoreStock);

module.exports = router;