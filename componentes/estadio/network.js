const express = require('express'); //utilizamos express
const response = require('../../network/response');//agregamos el modulo de respuestas
const controller = require('./controller')


const router = express.Router(); //utilizamos el router para las ratus 

router.get('/', (req,res) => {
    controller.listarEstadios()
    .then((estadioList) => {
        response.getInformation(res, estadioList);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500, e);
    })
});

router.post('/add', (req, res) => {
    controller.agregarEstadio(req.body)
    .then(() => response.success(req,res, 'Creado Correctamente', 201))
    .catch(e =>{
        response.datosRequeridos(req,res, 'Error inesperado', 400);
    });
});

router.put('/edit',(req,res) =>{
    controller.editarEstadio(req.body)
    .then(()=> response.success(req,res,'Editado Correctamente', 200))
    .catch(e => {
        response.error(req, res, 'Error del servidor', 500, e);
    });
});

router.delete('/delete/:id',(req, res) =>{
    controller.eliminarEstadio(req.params.id)
    .then(() => response.success(req,res, 'El estadio fue eliminado',200))
    .catch(e => response.error(req,res,'Error interno', 500, e));
});

module.exports = router; //exportamos el router
