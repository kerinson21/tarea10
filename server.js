
const express = require('express');//incluimos la libreria o paquete
const bodyParser = require('body-parser');//iniciamos el modulo


const cors = require('cors');
const listablanca = ['http://localhost:8080'];

//const router = require('./componentes/estadios/network')//nos traemos las routas 
const router = require('./network/routes');
const { application } = express;



const db = require('./db');
db();
var app = express();//guardamos en una variable la libreria.
app.use(bodyParser.json());//guardamos el modulo en el server y lo mandamos en formato json
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);//añadimos el router a la aplicacioón de express para utilizar los middlewares de express
app.use(cors());

//pasamos el servidor de express creado a nuestro router
router(app);

//para servir staticos utilizamos
app.use('/app', express.static('public'));



//eligimos un puerto para utilizarla
app.listen(3000);
console.log("Encendido en http://localhost:3000");
