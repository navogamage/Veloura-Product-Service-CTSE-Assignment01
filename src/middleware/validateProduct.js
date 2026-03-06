module.exports = (req, res, next) => {
  const { productName, description, price, category, brand, stockQuantity, size } = req.body;

  if (!productName || !description || !price || !category || !brand || !stockQuantity || !size) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  if (isNaN(price) || Number(price) < 0) {
    return res.status(400).json({ message: 'Invalid price' });
  }
  if (isNaN(stockQuantity) || Number(stockQuantity) < 0) {
    return res.status(400).json({ message: 'Invalid stock quantity' });
  }

  // Parse size if sent as JSON string from form-data
  if (typeof size === 'string') {
    try {
      req.body.size = JSON.parse(size);
    } catch {
      req.body.size = size.split(',').map(s => s.trim());
    }
  }

  if (!Array.isArray(req.body.size) || req.body.size.length === 0) {
    return res.status(400).json({ message: 'Size must be a non-empty array' });
  }

  next();
};