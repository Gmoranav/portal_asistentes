'use strict';
const cursoModel = require('./cursos.model');

module.exports.registrar = function (req, res) {

    let nuevoCurso = new cursoModel({
        nombre_curso: req.body.nombre_curso,
        codigo_curso: req.body.codigo_curso,
        cantidad_creditos: req.body.cantidad_creditos,
        estado: req.body.estado,


    });

    nuevoCurso.save(function (error) {
        if (error) {

            res.json({
                success: false,
                msj: 'El curso no pudo ser registrado :' + error
            });

        } else {

            res.json({
                success: true,
                msj: 'El curso se registró con éxito!'
            });
        }


    });


};

module.exports.listar_cursos = function (req, res) {
    cursoModel.find().sort({ $natural: -1 }).then(
        function (cursos) {
            res.send(cursos);
        }

    );

};

module.exports.buscar_curso_id = function (req, res) {
    cursoModel.findById({ _id: req.body._id }).then(
        function (curso) {
            res.send(curso);
        }

    );

};

module.exports.modificar_curso = function (req, res) {
    cursoModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (error, curso) {
            if (error) {
                res.json({ success: false, msg: 'No se ha actualizado el curso.' + handleError(error) });
            } else {
                res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
            }
        });
};

module.exports.desactivar_curso = function (req, res) {
    cursoModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (error, curso) {
            if (error) {
                res.json({ success: false, msg: 'No se ha desactivado el curso.' + handleError(error) });
            } else {
                res.json({ success: true, msg: 'Se ha desactivado el curso correctamente.' + res });
            }
        });
};
