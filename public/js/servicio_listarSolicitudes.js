/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';
/************************************************************************************/
function obtenerListaSolicitudes(){

    let listaSolicitudes = [];

    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_solicitudes',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
        }
      });

      peticion.done(function(response){
        listaSolicitudes = response;
      });

      peticion.fail(function(response){
        listaSolicitudes = response;
      });

    return listaSolicitudes;
};
/************************************************************************************/
function obtenerSolicitudId(pid){
  let solicitud = '';
  let peticion = $.ajax({

      //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
      url : 'http://localhost:4000/api/buscar_solicitud_id',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          _id : pid
        }
    });

    peticion.done(function(response){
     solicitud = response;
     console.log('envio exitoso');
    });

    peticion.fail(function(response){
      console.log("ERROR!!!! ENVIO FALLIDO!!!! ");
      console.log(response);
    });
    return solicitud;
};
/************************************************************************************/
function desactivar_solicitud(pid){
  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/desactivar_solicitud',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          _id: pid
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
