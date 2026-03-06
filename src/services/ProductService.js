const productRepository = require('../repositories/ProductRepository');

class ProductService {
  async createProduct(data) {
    // multer-storage-cloudinary already uploaded the file
    // req.file.path contains the Cloudinary URL
    return await productRepository.create(data);
  }

  async getAllProducts() {
    return await productRepository.findAll();
  }

  async getProductById(id) {
    return await productRepository.findById(id);
  }

  async updateProduct(id, data) {
    return await productRepository.update(id, data);
  }

  async deleteProduct(id) {
    return await productRepository.delete(id);
  }
}

module.exports = new ProductService();