'use strict';

function registrar_bitacora(sFecha, tmHoraInicio, tmHoraFin, sDescripcion, estado){
    let respuesta = '';
    let peticion = $.ajax({


        
        url : 'http://localhost:4000/api/registrar_bitacora',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            foto  : imagenUrl,
            nombre : sNombre,
            segundo_nombre : sSegundoNombre,
            primer_apellido : sPrimerApellido,
            segundo_apellido : sSegundoApellido,
            cedula : sCedula,
            fecha_ingreso : dFechaIngreso,
            rol : sltRol,
            direccion : sDireccion,
            distrito : sDistrito,
            canton : sCanton,
            provincia : sltProvincia,
            telefono : sTelefono,
            correo : sCorreo,
            contrasenna : pcontrasenna,
            estado : pestado,
            ingresos : pingresos
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

function modificar_bitacoras(_id, imagenUrl, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, sltRol, 
    sDireccion, sDistrito, sCanton, sltProvincia, sTelefono, sCorreo){

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
            rol : sltRol,
            direccion : sDireccion,
            distrito : sDistrito,
            canton : sCanton,
            provincia : sltProvincia,
            telefono : sTelefono,
            correo : sCorreo,
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