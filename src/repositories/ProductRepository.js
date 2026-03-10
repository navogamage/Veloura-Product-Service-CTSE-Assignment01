const Product = require("../models/Product");

class ProductRepository {
  async create(data) {
    return await Product.create(data);
  }

  async findAll() {
    return await Product.find();
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async update(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }

  async deductStock(id, qty) {
    // Atomically deduct qty only if enough stock exists
    return await Product.findOneAndUpdate(
      { _id: id, stockQuantity: { $gte: qty } },
      { $inc: { stockQuantity: -qty } },
      { new: true }
    );
  }
}

module.exports = new ProductRepository();
