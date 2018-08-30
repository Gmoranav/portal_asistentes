'use strict';
let mongoose = require('mongoose'); /*Conexion con el server de MongoDB*/

let solicitudSchema = new mongoose.Schema({
      primer_nombre : {type : String, required : true},
      segundo_nombre : {type : String},
      primer_apellido : {type : String, required : true},
      segundo_apellido : {type : String, required : true},
      cedula_postulante : {type : String},

      nombre_curso : {type : String, required : true},

      grupo : {type : String, required : true},
      periodo : {type : String},
      cantidad_alumnos : {type : Number},
      horario : {type : String},
/*
      profesores:[{
        nombre_profesor: {type : String, required : true},
        cedula_profesor: {type : Number, required : true},
      }]
    }
  */
      cedula_profesor : {type : Number, required : true},
      estado : {type : Number, required : true},
/******************************************************************************/
      carrera : {type : String},
      fecha_de_ingreso : {type : String},
      telefono : {type : Number},
      correo_electronico : {type : String}

      /**_id**/
/*
      cursos_llevados:[
        {
         codigo_curso : {type : String},
         nota_del_cursos : {type : String},
         ha_sido_asistente : {type : Boolean}
         }
       ]
  */
});

/*Test = el nombre de la carpeta que estamos trabajando en mayuscula y singular*/
module.exports = mongoose.model('Solicitud', solicitudSchema);
