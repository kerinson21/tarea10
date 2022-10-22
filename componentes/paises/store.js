
const Pais = require('./model');
//const list = [];
function agregar(pais){
    //list.push(estadio);
    console.log(pais);
    const newpais = new Pais(pais);
    newpais.save();
    //console.log(newpais); aqui puedo retornar el id del pais para guardarlo
}

async function listar(){
    const paises = await Pais.find();
    return paises;
}

async function editar(pais){
    const findPais = await Pais.findOne({
        _id: pais._id
    });
    findPais.nombre = pais.nombre;
    findPais.poblacion = pais.poblacion;
    findPais.ranking = pais.ranking;
    findPais.copas = pais.copas;

    const newPais = await findPais.save();
}
function remove(id){
    return Pais.deleteOne({_id: id});
}

module.exports = {
    add: agregar,
    list: listar,
    editar: editar,
    remove: remove
}