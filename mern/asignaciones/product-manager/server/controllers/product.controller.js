const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({products: allProducts}))
    .catch(err => res.json({products: null}));
}

module.exports.createNewProduct = (req, res) => {

    console.log('llegue aqui',req.body);
    Product.create(req.body)
    .then(newProduct => res.send({product: newProduct}))
    .catch(err => res.send({errors: err}));
}

module.exports.getProductByID = (req, res) => {
    Product.findById(req.params.id)
    .then(singleProduct => res.json({productData: singleProduct}))
    .catch(error => res.json({productData: null}));
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateProduct => res.json({ product: updateProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id })
        .then(deleteProduct => res.json({ productDeleted: deleteProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};