const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
    pais: {
        type: Schema.ObjectId,
        ref: 'paises'
    },
    jugador: {
        type: Schema.ObjectId,
        ref: 'jugadores'
    }
});
const model = mongoose.model('equipos', mySchema);
module.exports = model;