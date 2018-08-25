'use strict';



//cambiar el nombre Example por lo que se esté registrando, debe estar en singular
//cambiar los parametros manteniendo una s al principio cuando es texto y n cuando es numero
function registrarGrupo(psSede, psCarrera, psCurso, psPeriodo, psNombre, psLaboratorio, psProfesor, psCantidadEstu, psHorario){
    let respuesta = '';
    let peticion = $.ajax({

        //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
        url : 'http://localhost:4000/api/registrar_grupo',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            //cambiar los nombres por lo que se requiera
            //las variables son las que hay que usan en el archivo controlador
            //en la función imprimirListaExamples
            sedeGrupo : psSede,
            carreraGrupo : psCarrera,
            cursoGrupo : psCurso,
            periodoGrupo : psPeriodo,
            nombre : psNombre,
            laboratorio : psLaboratorio,
            profesores : psProfesor,
            cantidad_de_estudiantes : psCantidadEstu,
            horario : psHorario
        }
      });
    
    peticion.done(function(response){
        respuesta = response;
        console.log('envio exitoso');
    });

    peticion.fail(function(response){
        respuesta = response
        console.log('envio fallido');
    });

    return respuesta;
}

function modificarGrupo(psSede, psCarrera, psCurso, psPeriodo, psNombre, psLaboratorio, psProfesor, psCantidadEstu, psHorario){
    let respuesta = '';
    let peticion = $.ajax({

        //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
        url : 'http://localhost:4000/api/modificar_grupo',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            sedeGrupo : psSede,
            carreraGrupo : psCarrera,
            cursoGrupo : psCurso,
            periodoGrupo : psPeriodo,
            nombre : psNombre,
            laboratorio : psLaboratorio,
            profesores : psProfesor,
            cantidad_de_estudiantes : psCantidadEstu,
            horario : psHorario
        }
    });
    
    peticion.done(function(response){
        respuesta = response;
        console.log('envio exitoso');
    });

    peticion.fail(function(response){
        respuesta = response
        console.log('envio fallido');
    });

    return respuesta;
}
