'use strict';

function registrar_periodo(sNombreCuatri, sEstadoCuatri){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_periodo', 
        type : 'post',  
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre_periodo :sNombreCuatri,
            estado_periodo : sEstadoCuatri,
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
       console.log("envio exitoso"); 
      });
    
      peticion.fail(function(response){
       console.log("ERROR!!!! ENVIO FALLIDO!!!! ");
       console.log(response);
      });

      return respuesta;
}
