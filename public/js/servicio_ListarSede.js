/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

function obtenerSedes() {
    let llenarSedes = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_sedes',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        llenarSedes = response;
        console.log("envio exitoso");
    });

    peticion.fail(function (response) {
        console.log("ERROR!!!! ENVIO FALLIDO!!!! ");
        console.log(response);
    });

    return llenarSedes;
}
