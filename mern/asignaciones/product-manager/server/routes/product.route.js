const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products/new', ProductController.createNewProduct);
}