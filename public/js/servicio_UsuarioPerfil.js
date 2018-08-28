'use strict';

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
};



function modificarUsuarios(_id, imagenUrl, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, 
    sDireccion, sDistrito, sCanton, sltProvincia, sTelefono){

        let respuesta = '';
        let peticion = $.ajax({

        url : 'http://localhost:4000/api/modificar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            _id  : _id,
            foto  : imagenUrl,
            nombre : sNombre,
            segundo_nombre : sSegundoNombre,
            primer_apellido : sPrimerApellido,
            segundo_apellido : sSegundoApellido,
            cedula : sCedula,
            fecha_ingreso : dFechaIngreso,
            //rol : sltRol,
            direccion : sDireccion,
            distrito : sDistrito,
            canton : sCanton,
            provincia : sltProvincia,
            telefono : sTelefono,
            //correo : sCorreo,
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