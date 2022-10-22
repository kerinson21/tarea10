const store = require('./store');


function agregar(pais){
    return new Promise((resolve, reject) =>{

        if(pais.nombre === undefined){
            console.error('[paisController] algo ocurrio mal')
            return reject('Los datos no son correctos');
            return false;
        }

        const dato = {
            nombre: pais.nombre,
            poblacion: pais.poblacion,
            ranking: pais.ranking,
            copas: pais.copas
        };
        store.add(dato);
        resolve(dato);//resolvemos la promesa
    });
}
 
function listar(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function editar(pais){
    return new Promise(async(resolve, reject) =>{
        if(!pais){
            reject('Invalid data');
            return false;
        }
        const result = await store.editar(pais);
        resolve(result);
    });
}
function eliminar(id){
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
    agregar,
    listar,
    editar,
    eliminar
}