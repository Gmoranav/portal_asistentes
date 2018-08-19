'use strict';
const solicitudModel = require('./solicitudes.model');

module.exports.registrar_solicitud = function(req, res){
    /**Todo para registrar un usuario va aqui */
    let nuevaSolicitud = new solicitudModel({

        primer_nombre : req.body.primer_nombre,
        segundo_nombre : req.body.segundo_nombre,
        primer_apellido : req.body.primer_apellido,
        segundo_apellido : req.body.segundo_apellido,
        grupo : req.body.grupo,

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

/*funcion para asociar*/
/*
module.exports.agregar_solicitud=function(req,res){
  userModel.update(
    {_id:req.body._id},
    $push:
    {
      'solicitudes':
      {
        curso : req.body.curso,
        periodo : req.body.periodo,
        cantidad_alumnos : req.body.cantidad_alumnos,
        horario : req.body.horario
      }
    }
  )
}
*/

module.exports.buscar_solicitud_por_id = function(req,res){
    solicitudModel.finById({_id: req.body.id}).then(
      function(solicitud){
        res.send(solicitud);
      }
    );
};

module.exports.modificar_usuario = function(req, res){
  userModel.findByIdAndUpdate(req.body._id,{ $set: req.body },
    function(error){
        if(error){
            res.json({
                success : false,
                msj : ' La solicitud no pudo se pudo modificar : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : ' La solicitud ha sido modificada con exito'
            });
        }
    });
  };
