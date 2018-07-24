/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

function registrarSede(sNombreSede, sProvinciaSede, sCantonSede, sDistritoSede, sUbicacionSede) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_sede',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            nombreSede: sNombreSede,
            provinciaSede: sProvinciaSede,
            cantonSede: sCantonSede,
            distritoSede: sDistritoSede,
            ubicacionSede: sUbicacionSede,
        }
    });

    peticion.done(function (response) {
        respuesta = response;
        console.log("envio exitoso");
    });

    peticion.fail(function (response) {
        console.log("ERROR!!!! ENVIO FALLIDO!!!! ");
        console.log(response);
    });

    return respuesta;
}
