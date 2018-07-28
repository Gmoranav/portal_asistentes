/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';




function obtenerListaCarreras(){


    let listaCarreras = [];

    let peticion = $.ajax({
 
        url : 'http://localhost:4000/api/listar_carreras',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
        listaCarreras = response;
      });
    
      peticion.fail(function(response){
        listaCarreras = response;
      });

    return listaCarreras;
}