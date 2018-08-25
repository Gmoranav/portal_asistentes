'use strict';

/**
 * la const exampleModel se cambia en 
 */
const grupoModel = require('./grupos.model');

module.exports.registrar_grupos = function(req, res){
    
    /**Todo para registrar un usuario va aqui */
    let nuevoGrupo = new grupoModel({

        /**Este es el mismo input que el de model.js */
        sedeGrupo : req.body.sedeGrupo,
        carreraGrupo : req.body.carreraGrupo,
        cursoGrupo : req.body.cursoGrupo,
        periodoGrupo : req.body.periodoGrupo,
        nombre : req.body.nombre,
        laboratorio : req.body.laboratorio,
        profesores : req.body.profesores,
        cantidad_de_estudiantes : req.body.cantidad_de_estudiantes,
        horario : req.body.horario

    });

    nuevoGrupo.save(function(error){
        
        if(error){
            res.json({
                success : false,
                msj : ' El grupo no pudo ser registrado : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : ' El grupo ha sido registrado de forma exitosa'
            });
        }

    });
};

module.exports.listar_grupos = function(req, res){
    grupoModel.find().sort({$natural:-1}).then(
        function(grupos){
            res.send(grupos);
        }
    );
};

module.exports.buscar_grupo_por_id = function (req, res) {
    grupoModel.findById({ _id: req.body._id }).then(
        function (grupos) {
            res.send(grupos);
        }
    );
};

module.exports.modificar_grupo = function (req, res) {
    grupoModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'El grupo no se ha podido modificar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha actualizado correctamente. ' + res });
            }
        });
};





module.exports.desactivar_grupo = function (req, res) {
    grupoModel.findByIdAndDelete(req.body._id,
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'El grupo no se ha podido eliminar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha eliminado correctamente. ' + res });
            }
        });
};
