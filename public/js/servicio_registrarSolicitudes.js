/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/
'use strict';
function registrarSolicitudes(sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCurso, sGrupo, sPeriodo,
nCantidadAlumnos, sHorario, nCedulaPostulante, nCedulaProfesor, nEstatus, sCarrera , sFechaDeIngreso, nTelefono,sCorreoElectronico){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_solicitud',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
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
function modificarSolicitudes(_id, sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sCurso,
/*sPeriodo,*/ sGrupo/*, nCantidadAlumnos, sHorario*/){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/modificar_solicitud',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
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
