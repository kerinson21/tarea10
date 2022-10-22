const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: String,
    poblacion: String,
    ranking: String,
    copas: String
});
const model = mongoose.model('paises', mySchema);
module.exports = model;