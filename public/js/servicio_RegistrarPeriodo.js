'use strict';

function registrarPeriodo(sNombreCuatri, sEstadoCuatri, pEstado) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_periodo',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            nombre_periodo: sNombreCuatri,
            estado_periodo: sEstadoCuatri,
            estado : pEstado
        }
    });

    peticion.done(function (response) {
        respuesta = response;
        console.log("registrarPeriodo - envio exitoso");
    });

    peticion.fail(function (response) {
        console.log("registrarPeriodo - ERROR!!!! ENVIO FALLIDO!!!! ");
        console.log(response);
    });

    return respuesta;
}


function modificarPeriodo(_id, sNombreCuatri, sEstadoCuatri) {

    let respuesta = '';
    let peticion = $.ajax({

        url: 'http://localhost:4000/api/modificar_periodo',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            _id : _id,
            nombre_periodo : sNombreCuatri,
            estado_periodo : sEstadoCuatri
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
}

