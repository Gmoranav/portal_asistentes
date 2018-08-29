/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

//cambiar el nombre Example por lo que se esté registrando, debe estar en singular
//cambiar los parametros manteniendo una s al principio cuando es texto y n cuando es numero



function registrarSolicitudes(sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCurso, sGrupo, sPeriodo,
nCantidadAlumnos, sHorario, nCedulaPostulante, nCedulaProfesor, nEstatus, sCarrera , sFechaDeIngreso, nTelefono,sCorreoElectronico){
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
            primer_nombre : sPrimerNombre,
            segundo_nombre : sSegundoNombre,
            primer_apellido : sPrimerApellido,
            segundo_apellido : sSegundoApellido,
            nombre_curso : sCurso,
            grupo : sGrupo,
            periodo : sPeriodo,
            cantidad_alumnos : nCantidadAlumnos,
            horario : sHorario,
            cedula_postulante : nCedulaPostulante,
            cedula_profesor : nCedulaProfesor,
            estado : nEstatus,
            carrera : sCarrera,
            fecha_de_ingreso : sFechaDeIngreso,
            telefono : nTelefono,
            correo_electronico : sCorreoElectronico
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

//(_id, sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCurso,/*sPeriodo,*/ sGrupo
/*nCantidadAlumnos, shorario);*/

function modificarSolicitudes(_id, sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCurso,
/*sPeriodo,*/ sGrupo/*, nCantidadAlumnos, sHorario*/){
    let respuesta = '';
    let peticion = $.ajax({

        //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
        url : 'http://localhost:4000/api/modificar_solicitud',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            //cambiar los nombres por lo que se requiera
            //las variables son las que hay que usan en el archivo controlador
            //en la función imprimirListaExamples
            _id : _id,
            primer_nombre :sPrimerNombre,
            segundo_nombre : sSegundoNombre,
            primer_apellido : sPrimerApellido,
            segundo_apellido : sSegundoApellido,
            /*curso : sCurso,*/
            //periodo : sPeriodo,
            /*grupo : sGrupo*/
            //cantidad_alumnos : nCantidadAlumnos,
            //horario : sHorario
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
