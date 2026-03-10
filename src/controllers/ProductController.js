const productService = require('../services/ProductService');

const createProduct = async (req, res, next) => {
  try {
    const productData = { ...req.body };
    if (req.file) {
      productData.imageUrl = req.file.path;
    }
    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    console.error('Create Product Error:', error);
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productData = { ...req.body };
    if (req.file) {
      productData.imageUrl = req.file.path;
    }

    // Parse size if sent as JSON string from form-data
    if (typeof productData.size === 'string') {
      try {
        productData.size = JSON.parse(productData.size);
      } catch {
        productData.size = productData.size.split(',').map(s => s.trim());
      }
    }

    const updated = await productService.updateProduct(req.params.id, productData);
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product updated successfully', product: updated });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    next(error);
  }
};

const deductStock = async (req, res, next) => {
  try {
    const qty = parseInt(req.body.quantity, 10);
    if (!qty || qty < 1) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }
    const updated = await productService.deductStock(req.params.id, qty);
    if (!updated) {
      return res.status(400).json({ message: 'Insufficient stock or product not found' });
    }
    res.status(200).json({ message: 'Stock updated', stockQuantity: updated.stockQuantity });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  deductStock,
};