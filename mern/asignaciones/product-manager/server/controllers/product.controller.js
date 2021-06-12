const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({products: allProducts}))
    .catch(err => res.json({error: err}));
}

module.exports.createNewProduct = (req, res) => {

    console.log('llegue aqui',req.body);
    Product.create(req.body)
    .then(newProduct => res.send({product: newProduct}))
    .catch(err => res.send({errors: err}));
}

module.exports.getProductByID = (req, res) => {
    Product.findById(req.params.id)
    .then(singleProduct => res.json({product: singleProduct}))
    .catch(err => res.json({error: err}));
}