const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No puede enviar un autor sin nombre'],
        minLength: [3, 'Requiere por lo menos 3 caracteres']
    }
},
{timestamps: true}
);

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;