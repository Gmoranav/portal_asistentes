/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

function obtenerListaSolicitudes(){

    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
    let listaSolicitudes = [];

    //let respuesta = '';
    let peticion = $.ajax({
        //*cambiar examples en el url por lo que se vaya a registrar, debe estar en plural
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


    //cambiar Examples por lo que se vaya a listar. Debe estar en plural
    return listaSolicitudes;
}


