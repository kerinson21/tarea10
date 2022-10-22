const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: String,
    direccion: String,
    capacidad: String,
    ciudad: String
});
const model = mongoose.model('estadio', mySchema);
module.exports = model;