'use strict';

const carreraModel = require('./carreras.model');

module.exports.registrar = function(req, res){

    let nuevaCarrera = new carreraModel({

        codigo_carrera : req.body.codigo_carrera,
        nombre_carrera : req.body.nombre_carrera,
        creditos_totales : req.body.creditos_totales,
        fecha_creacion : req.body.fecha_creacion,
        slt_sede : req.body.slt_sede,
        acreditacion : req.body.acreditacion

    });

    nuevaCarrera.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : 'La carrera no pudo ser registrada :' + error
            });

        }else{

            res.json({
                success : true,
                msj : 'La carrera se registró con éxito!'
            });
        }

    });
};


module.exports.listar_carreras = function(req, res){
    //carreraModel.find().sort({nombre_carrera : 'asc'}).then(
    carreraModel.find().sort({$natural:-1}).then(

        function(carreras){
            res.send(carreras);
        }
    );
};


module.exports.buscar_carrera_id = function(req, res){
    carreraModel.findById({_id: req.body._id}).then(
        function(carrera){
            res.send(carrera);
        }
    );

};

module.exports.modificar_carrera = function(req,res){
      carreraModel.findByIdAndUpdate(req.body._id, { $set: req.body},
        function(error, carrera){
          if (error) {
            res.json({success: false, msg: 'No se ha actualizado la carrera.' + handleError(error)});
          }else {
            res.json({success: true, msg: 'Se ha actualizado correctamente.' + res});
          }
        });
};