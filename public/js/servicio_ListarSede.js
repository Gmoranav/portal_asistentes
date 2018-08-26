/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/
'use strict';

function obtenerListaSedes() {
    let listaSedes = [];
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
        listaSedes = response;
    });

    peticion.fail(function (response) {
        listaSedes = response;
    });

    return listaSedes;
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


// funcion para desactivar una sede (va a sedes.api.js y a sedes.route.js)
function desactivar_sede(p_id, p_estado){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/desactivar_sede',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id: p_id,
            estado : p_estado
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });
  
      return respuesta;
  };
