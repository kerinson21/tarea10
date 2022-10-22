const express = require('express');
const estadio  = require('../componentes/estadio/network'); 
const pais = require('../componentes/paises/network');
const equipo = require('../componentes/equipo/network');

const routes = function (server){
    //cada vez que llamen a la ruta llamaran al componente equipos
    server.use('/estadio', estadio);
    server.use('/pais', pais);
    server.use('/equipo', equipo);
}
module.exports = routes;