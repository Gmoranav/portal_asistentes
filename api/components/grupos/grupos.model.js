'use strict';
let mongoose = require('mongoose'); /*Conexion con el server de MongoDB*/

/*Esquema para los usuarios*/
/**
 * Cambiar exampleSchema y Template 
 */
let grupoSchema = new mongoose.Schema({
    /**Apartir de aqui se crean las propiedades que se le solicita al usuario*/
    /**Las propiedades para crear usuarios con rol */

    /**El example seria el input al que se le solicita al usuario */
    nombre : {type : String, required : true, unique : true},
    laboratorio : {type : String, required : true},
    profesor : {type : String, required : true},
    cantidad_de_estudiantes : {type : String, required : true},
    horario : {type : String, required : true}

}); 

module.exports = mongoose.model('Grupo', grupoSchema);