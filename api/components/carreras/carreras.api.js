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
    carreraModel.find().sort({$natural:-1}).then(
        function(carreras){
            res.send(carreras);
        }
    );
};
