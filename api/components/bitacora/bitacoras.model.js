'use strict';
let mongoose = require('mongoose'); /*Conexion con el server de MongoDB*/

/*Esquema para los usuarios*/
let bitacoraSchema = new mongoose.Schema({
    /**Apartir de aqui se crean las propiedades que se le solicita al usuario*/
    /**Las propiedades para crear usuarios con rol */

    nombre_profesor : {type : String, required : true},
    primer_nombre_asistente : {type : String, required : true},
    segundo_nombre_asistente : {type : String, required : false},
    primer_apellido_asistente : {type : String, requerid : false},
    segundo_apellido_asistente : {type : String, required : false},
    curso : {type : String, required : false},
    grupo : {type : String, required : false},
    //subdocumento. La bitacora tiene varios registros que los hace
    //el asistente del profesor
    registros : [
        {
            fecha : {type : String, required : false},
            hora_inicio : {type: String, required : false},
            hora_fin : {type : String, required : false},
            descripcion : {type : String, required : false},
        }
    ],   
    estado : {type : Number, required : false}
}); 

module.exports = mongoose.model('Bitacora', bitacoraSchema);