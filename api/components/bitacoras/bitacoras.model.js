'use strict';
let mongoose = require('mongoose'); /*Conexion con el server de MongoDB*/

/*Esquema para los usuarios*/
let bitacoraSchema = new mongoose.Schema({
    /**Apartir de aqui se crean las propiedades que se le solicita al usuario*/
    /**Las propiedades para crear usuarios con rol */

    nombre_profesor : {type : String, required : true},
    primer_nombre_asistente : {type : String, required : true},
    segundo_nombre_asistente : {type : String},
    primer_apellido_asistente : {type : String},
    segundo_apellido_asistente : {type : String},
    curso : {type : String},
    grupo : {type : String},
    //subdocumento. La bitacora tiene varios registros que los hace
    //el asistente del profesor
    registros : [
        {
            fecha : {type : String},
            hora_inicio : {type: String},
            hora_fin : {type : String},
            descripcion : {type : String},
        }
    ],   
    estado : {type : Number}
}); 

module.exports = mongoose.model('Bitacora', bitacoraSchema);