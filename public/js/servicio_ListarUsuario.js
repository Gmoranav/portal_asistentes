
'use strict';

function obtenerListaUsuarios(){

    let listaUsuarios = [];

    let peticion = $.ajax({
 
        url : 'http://localhost:4000/api/listar_usuarios',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{ 
        }
      });
    
      peticion.done(function(response){
        listaUsuarios = response;
      });
    
      peticion.fail(function(response){
        listaUsuarios = response;
      });

    return listaUsuarios;
}


function obtener_usuario_por_id(p_id){
    let usuario = '';

    let peticion = $.ajax({
 
        url : 'http://localhost:4000/api/buscar_usuario_id',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{ 
          _id: p_id
        }
      });
    
      peticion.done(function(response){
        usuario = response;
      });
    
      peticion.fail(function(response){
        usuario = response;
      });

    return usuario;
}

function eliminar_usuario(p_id){
  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/eliminar_usuario',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          _id: p_id
      }
    });
  
    peticion.done(function(response){
     respuesta = response;
    });
  
    peticion.fail(function(response){
     
    });

    return respuesta;
};
