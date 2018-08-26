'use strict';
const solicitudModel = require('./solicitudes.model');
const nodemailer = require('nodemailer');



module.exports.registrar_solicitud = function(req, res){
    /**Todo para registrar un usuario va aqui */
    let nuevaSolicitud = new solicitudModel({

        primer_nombre : req.body.primer_nombre,
        segundo_nombre : req.body.segundo_nombre,
        primer_apellido : req.body.primer_apellido,
        segundo_apellido : req.body.segundo_apellido,
        grupo : req.body.curso,
        grupo : req.body.grupo,
        grupo : req.body.estadp,
        grupo : req.body._id,


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

module.exports.buscar_solicitud_id = function(req,res){
    solicitudModel.findById({_id: req.body._id}).then(
      function(solicitud){
        res.send(solicitud);
      }
    )
};

module.exports.modificar_solicitud = function(req, res){
  solicitudModel.findByIdAndUpdate(req.body._id,{ $set: req.body },
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


  module.exports.desactivar_solicitud = function (req, res) {
      solicitudModel.findByIdAndDelete(req.body._id,
          function (err, user) {
              if (err) {
                  res.json({ success: false, msg: 'La solicitud no se ha podido desactivar. ' + handleError(err) });

              } else {
                  res.json({ success: true, msg: 'Se ha desactivado correctamente. ' + res });
              }
          });
  };



  /*
  module.exports.buscar_usuario_por_id = function(req, res){
    usuarioModel.findById({_id: req.body._id}).then(
        function(usuario){
            res.send(usuario);
        }
    );
};

module.exports.modificar_usuario = function(req, res){

    //se buscar el registro que tenga el _id y con set
    //se modifica todo el cuerpo de la petición

    usuarioModel.findByIdAndUpdate(req.body._id, {$set: req.body},
    function(err, user){
        if(err){
            res.json({ success: false, msg: 'El usuario no se ha podido modificar. ' +
            handleError(err) });
        }else{
            res.json({success: true, msg: 'Se ha actualizado correctamente. ' + res});
        }
    });
};
*/
