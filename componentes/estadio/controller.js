const store = require('./store');


function agregarEstadio(estadio){
    return new Promise((resolve, reject) =>{

        if(estadio.nombre === undefined){
            console.error('[estadioController] algo ocurrio mal')
            return reject('Los datos no son correctos');
            return false;
        }

        const dato = {
            nombre: estadio.nombre,
            direccion: estadio.direccion,
            capacidad: estadio.capacidad,
            ciudad: estadio.ciudad
        };
        store.add(dato);
        resolve(dato);//resolvemos la promesa
    });
}
 
function listarEstadios(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function editarEstadio(estadio){
    return new Promise(async(resolve, reject) =>{
        if(!estadio){
            reject('Invalid data');
            return false;
        }
        const result = await store.editar(estadio);
        resolve(result);
    });
}
function eliminarEstadio(id){

    return new Promise((resolve, reject) =>{
        if(!id){reject('El id es invalido'); return false;}
        store.remove(id)
        .then(() =>{
            resolve();
        })
        .catch(e=> reject(e));
    });
}

module.exports = {
    agregarEstadio,
    listarEstadios,
    editarEstadio,
    eliminarEstadio
}