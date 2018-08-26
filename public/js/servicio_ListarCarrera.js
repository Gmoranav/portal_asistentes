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

function obtener_carrera_por_id(p_id){

  let listaCarreras = [];

  let peticion = $.ajax({

      url : 'http://localhost:4000/api/buscar_carrera_id',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{

          _id : p_id

      }
    });
  
    peticion.done(function(response){
      listaCarreras = response;
    });
  
    peticion.fail(function(response){
      listaCarreras = response;
    });

  return listaCarreras;

};

function desactivar_carrera(p_id, p_estado){

  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/desactivar_carrera',
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
  
}