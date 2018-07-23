'use strict';
const sedesModel = require('./sedes.model');


module.exports.registrar = function (req, res) {
    let nuevaSede = new sedesModel({

        nombreSede: req.body.nombreSede,
        provinciaSede: req.body.provinciaSede,
        cantonSede: req.body.cantonSede,
        distritoSede: req.body.distritoSede,
        ubicacionSede: req.body.ubicacionSede,
    });

    nuevaSede.save(function (error) {

        if (error) {
            res.json({
                success: false,
                msj: 'La sede NO se registró : ' + error
            });
        } else {
            res.json({
                success: true,
                msj: 'La sede se registró éxitosamente'
            });
        }
    });
};


module.exports.listar_sedes = function (req, res) {
    sedesModel.find().sort({ nombreSede: 'asc' }).then(
        function (sedes) {
            res.send(sedes);
        }
    );
};