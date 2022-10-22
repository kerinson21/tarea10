
const Equipo = require('./model');
const Jugador = require('./jugador');
//const list = [];
function agregar(equipo){
    //list.push(estadio);
    //console.log(equipo);
    const jugador  = new Jugador(equipo.jugador);
    jugador.save();
    const cEquipo = {
        pais: equipo.pais,
        jugador: jugador._id
    }
    console.log(cEquipo);
    const newEquipo = new Equipo(cEquipo);
    newEquipo.save();
    //console.log(newEquipo); aqui puedo retornar el id del Equipo para guardarlo
}

async function listar(){
    return new Promise((resolve, reject) =>{
        Equipo.find()
        .populate('pais')
        .populate('jugador')
        .exec((error, populated) =>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated);
        })

    });
}

async function listarJugador(id){
    return new Promise((resolve, reject) =>{
        Equipo.find({
            pais: id
        })
        .populate('pais')
        .populate('jugador')
        .exec((error, populated) =>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated);
        })

    });
}



async function editar(equipo){
    const findEquipo = await Equipo.findOne({
        _id: equipo._id
    });
    findEquipo.nombre = equipo.nombre;
    findEquipo.poblacion = equipo.poblacion;
    findEquipo.ranking = equipo.ranking;
    findEquipo.copas = equipo.copas;

    const newEquipo = await findEquipo.save();
}
function remove(id){
    return Equipo.deleteOne({_id: id});
}

module.exports = {
    add: agregar,
    list: listar,
    editar: editar,
    remove: remove,
    listJugador: listarJugador
} 