'use strict';
const cursoModel = require('./cursos.model');

module.exports.registrar = function(req, res){

    let nuevoCurso = new cursoModel({
        nombre_curso : req.body.nombre_curso,
        codigo_curso : req.body.codigo_curso,
        cantidad_creditos : req.body.cantidad_creditos,
        


    });

    nuevoCurso.save(function(error){
        if(error){

            res.json({
                success : false,
                msj : 'El curso no pudo ser registrado :' + error
            });

        }else{

            res.json({
                success : true,
                msj : 'El curso se registró con éxito!'
            });
        }


    });


};

module.exports.listar_cursos = function (req, res){
    cursoModel.find().sort({$natural:-1}).then(
        function (cursos){
            res.send(cursos);
        }

    );


};
