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
}

module.exports = new ProductRepository();
