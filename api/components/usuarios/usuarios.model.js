'use strict';
let mongoose = require('mongoose'); /*Conexion con el server de MongoDB*/

/*Esquema para los usuarios*/
let usuarioSchema = new mongoose.Schema({
    /**Apartir de aqui se crean las propiedades que se le solicita al usuario*/
    /**Las propiedades para crear usuarios con rol */

    foto  : {type : String, required : false},
    nombre : {type : String, required : true},
    segundo_nombre : {type : String, required : false},
    primer_apellido : {type : String, requerid : true},
    segundo_apellido : {type : String, required : true},
    cedula : {type : String, unique : true, required : true},
    fecha_ingreso : {type : String, required : true},
    rol : {type : String, required : true},
    direccion : {type: String, required : true},
    distrito : {type : String, required : false},
    canton : {type : String, required : true},
    provincia : {type : String, required : true},
    telefono : {type : String, required : true},
    correo : {type : String, required : true},
    usuario : {type : String, required : true},
    contrasenna : {type : String, required : true},
    estado : {type : Number, required : true}
}); 

module.exports = mongoose.model('Usuario', usuarioSchema);