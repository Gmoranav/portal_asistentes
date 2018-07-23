/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

function registrarUsuarios(imagenUrl, sNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaIngreso, sltRol, 
    sDireccion, sDistrito, sCanton, sltProvincia, sTelefono, sCorreo){
    let respuesta = '';
    let estado = 1;
    let peticion = $.ajax({


        
        url : 'http://localhost:4000/api/registrar_usuario',
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
            usuario : sCedula,
            contrasenna : sCedula,
            estado : estado
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