/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

function registrarSede(sNombreSede, sProvinciaSede, sCantonSede, sDistritoSede, sUbicacionSede, pEstado) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_sede',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            nombre_sede: sNombreSede,
            provincia_sede: sProvinciaSede,
            canton_sede: sCantonSede,
            distrito_sede: sDistritoSede,
            ubicacion_sede: sUbicacionSede,
            estado : pEstado
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

function modificarSede(_id, sNombreSede, sProvinciaSede, sCantonSede, sDistritoSede, sUbicacionSede) {

    let respuesta = '';
    let peticion = $.ajax({

        url: 'http://localhost:4000/api/modificar_sede',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            _id : _id,
            nombre_sede : sNombreSede,
            provincia_sede : sProvinciaSede,
            canton_sede : sCantonSede,
            distrito_sede  : sDistritoSede,
            ubicacion_sede : sUbicacionSede
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

