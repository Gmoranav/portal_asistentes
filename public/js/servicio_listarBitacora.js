
'use strict';

function obtenerListaBitacoras(){

    let listaBitacoras = [];

    let peticion = $.ajax({
 
        url : 'http://localhost:4000/api/listar_bitacoras',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{ 
        }
      });
    
      peticion.done(function(response){
        listaBitacoras = response;
      });
    
      peticion.fail(function(response){
        listaBitacoras = response;
      });

    return listaBitacoras;
}


function obtener_bitacora_por_id(p_id){
    let bitacora = '';

    let peticion = $.ajax({
 
        url : 'http://localhost:4000/api/buscar_bitacora_id',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{ 
          _id: p_id
        }
      });
    
      peticion.done(function(response){
        bitacora = response;
      });
    
      peticion.fail(function(response){
        bitacora = response;
      });

    return bitacora;
};

function desactivar_bitacora(p_id, pestado){
  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/desactivar_bitacora',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          _id: p_id,
          estado : pestado
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
