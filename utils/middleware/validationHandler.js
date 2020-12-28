// Para devolver un error de Boom, requerimos boom
const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate( data, schema ){
    // ANTIGUA IMPLEMENTACIÓN DE JOIN
    //const { error } = joi.validate( data, schema );
    // NUEVA IMPLEMENTACIÓN DE JOI ahora el schema valida la data
    const { error } = joi.object(schema).validate(data)

    return error;
}


function validationHandler(schema, check = "body") {
    return function (req, res, next) {
        const error = validate(req[check], schema);
        // Estó nos va a devolver un error de que los datos no son validos
        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationHandler;