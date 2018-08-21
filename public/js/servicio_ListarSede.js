/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/
'use strict';

function obtener_sedes() {
    let llenar_sedes = [];
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
        llenar_sedes = response;
        console.log("envio exitoso");
    });

    peticion.fail(function (response) {
        console.log("ERROR!!!! ENVIO FALLIDO!!!! ");
        console.log(response);
    });

    return llenar_sedes;
}

function obtener_sede_por_id(p_id) { //funcion viene del controlador
    let sede = '';
    let peticion = $.ajax({
  
      url: 'http://localhost:4000/api/buscar_sede_id', //ruta proviene del api
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {
        _id: p_id
      }
    });
  
    peticion.done(function (response) {
      sede = response;
    });
  
    peticion.fail(function (response) {
  
    });
  
    return sede;
  
  };
