exports.success = (req, res, message, status) => {
    res.send(`${message} ${status}`);//agregamos lo que queremos que respond
}

exports.getInformation = (res, dato) =>{
    res.send(dato);
}
exports.error = (req, res, message, status, datails) => {
    console.log(datails);
    res.status(status || 500).send({
        error: message,
        body: '',
    })
}
exports.datosRequeridos = (req, res, message, status, datails) => {
    console.log(`Uno o mas campos son ${datails}`);
    res.status(status || 500).send({
        error: message,
        body: '',
    })
}