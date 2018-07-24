'use strict';

/**
 * let lista_curso = [];
 */


function registrar_curso(psNombreCurso , psCodigoCurso , psltSede , nCantidadCreditos, psltCarreraCurso){

    let respuesta = '';
    let peticion = $.ajax({

        url : 'http://localhost:4000/api/registrar_curso',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            nombre_curso : psNombreCurso,
            codigo_curso : psCodigoCurso,
            slt_sede : psltSede,
            cantidad_creditos : nCantidadCreditos,
            slt_carreraCurso : psltCarreraCurso

        }
    });

    peticion.done(function(response){
        respuesta = response;
        console.log('envio exitoso');
       });
     
       peticion.fail(function(response){
         respuesta = response;
         console.log('envio no exitoso');
       });
 
       return respuesta;


}

/* *
 let nuevoCurso = [];
    nuevoCurso.push(psNombreCurso, psCodigoCurso, psltSede, nCantidadCreditos, psltCarreraCurso);

    lista_curso.push(nuevoCurso); */
    
