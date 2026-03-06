module.exports = (req, res, next) => {
  const { productName, description, price, category, brand, stockQuantity } = req.body;
  if (!productName || !description || !price || !category || !brand || !stockQuantity) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid price' });
  }
  if (typeof stockQuantity !== 'number' || stockQuantity < 0) {
    return res.status(400).json({ message: 'Invalid stock quantity' });
  }
  next();
};
