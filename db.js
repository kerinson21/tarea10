const mongoose = require('mongoose');
require('dotenv').config();

//conexion
mongoose.Promise = global.Promise;

async function conectar(){
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('[DB] La Base de datos fue conectada correctamente')
	})
	.catch( error => {
		console.error('[DB] La Base de datos no se pudo conectar debido al errror:', error.message) 
	});
}

module.exports = conectar;