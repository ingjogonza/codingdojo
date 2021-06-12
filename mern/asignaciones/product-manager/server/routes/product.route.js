const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.getProductByID);
    app.post('/api/products/new', ProductController.createNewProduct);

}