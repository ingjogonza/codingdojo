const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No puede enviar un jugador sin nombre'],
        minLength: [2, 'Requiere por lo menos 2 caracteres']
    },
    preferred_position: {
        type: String
    },
    status: {
        type: Map,
        of: String
    },    
},
{timestamps: true}
);

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;