/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

//cambiar el nombre Example por lo que se esté registrando, debe estar en singular
//cambiar los parametros manteniendo una s al principio cuando es texto y n cuando es numero
function registrarSolicitudes(sPrimerNombre, sSegundoNombre, sApellido, sSegundoApellido, sCurso, 
    sPeriodo, sGrupo, nCantidadAlumnos, sHorario){
    let respuesta = '';
    let peticion = $.ajax({

        //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
        url : 'http://localhost:4000/api/registrar_solicitud',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            //cambiar los nombres por lo que se requiera
            //las variables son las que hay que usan en el archivo controlador
            //en la función imprimirListaExamples
            primer_nombre :sPrimerNombre,
            segundo_nombre : sSegundoNombre,
            primer_apellido : sApellido,
            segundo_apellido : sSegundoApellido,
            curso : sCurso,
            periodo : sPeriodo, 
            grupo : sGrupo, 
            cantidad_alumnos : nCantidadAlumnos, 
            horario : sHorario
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
       console.log('envio exitoso');
      });
    
      peticion.fail(function(response){
        console.log("ERROR!!!! ENVIO FALLIDO!!!! ");
        console.log(response);
      });

      return respuesta;
}

//cambiar Examples por lo que se vaya a listar. Debe estar en plural






