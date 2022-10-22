
const Model = require('./model');


function agregar(estadio){
    //list.push(estadio);
    const newestadio = new Model(estadio);
    newestadio.save();

}

async function listar(){
    const estadios = await Model.find();
    return estadios;
}

async function editar(estadio){
    const foundEstadio = await Model.findOne({
        _id: estadio._id
    });
  
    foundEstadio.nombre = estadio.nombre;
    foundEstadio.direccion = estadio.direccion;
    foundEstadio.capacidad = estadio.capacidad;
    foundEstadio.ciudad = estadio.ciudad;
    const newEstadio = await foundEstadio.save();
}
function remove(id){
    return Model.deleteOne({_id: id});
}

module.exports = {
    add: agregar,
    list: listar,
    editar: editar,
    remove: remove
}