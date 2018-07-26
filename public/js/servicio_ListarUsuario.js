
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
