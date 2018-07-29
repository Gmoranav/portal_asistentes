'use strict';
const solicitudModel = require('./solicitudes.model');

module.exports.registrar_solicitud = function(req, res){
    /**Todo para registrar un usuario va aqui */
    let nuevaSolicitud = new solicitudModel({
 
        primer_nombre : req.body.primer_nombre,
        segundo_nombre : req.body.segundo_nombre,
        primer_apellido : req.body.primer_apellido,
        segundo_apellido : req.body.segundo_apellido,
        curso : req.body.curso,
        periodo : req.body.periodo,
        grupo : req.body.grupo,
        cantidad_alumnos : req.body.cantidad_alumnos,
        horario : req.body.horario

    });

    nuevaSolicitud.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : ' La solicitud no pudo ser registrado : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : ' La solicitud ha sido registrada de forma exitosa'
            });
        }
    });
};


/*Funcion para Listar*/


module.exports.listar_solicitudes = function(req, res){
    solicitudModel.find().sort({$natural:-1}).then(
        function(solicitudes){
            res.send(solicitudes);
        }
    ); 
};

