const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'No puede enviar un producto sin titulo']
    },
    price: {
        type: Number,
        required: [true, 'No se puede crear un producto sin precio']
    },
    description: {
        type: String,
        required: [true, 'No puede enviar un producto descripcion']
    },    
},
{timestamps: true}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;