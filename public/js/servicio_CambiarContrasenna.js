'use strict';

function registrarNuevaContrasenna(p_id_Usuario, p_nuevaContrasenna, p_ingresos){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/cambiar_contrasenna',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id: p_id_Usuario,
            contrasenna  : p_nuevaContrasenna,
            ingresos : p_ingresos,

        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}