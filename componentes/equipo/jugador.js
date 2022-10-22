const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: String,
    edad: String,
    posicion: String
});
const jugador = mongoose.model('jugadores', mySchema);
module.exports = jugador;