/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

//cambiar el nombre Example por lo que se esté registrando, debe estar en singular
//cambiar los parametros manteniendo una s al principio cuando es texto y n cuando es numero
function registrarLaboratorio(psNombreLaboratorio, psCantidadEspacios, psSedeLab){
    let respuesta = '';
    let peticion = $.ajax({

        //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
        url : 'http://localhost:4000/api/registrar_laboratorio',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            //cambiar los nombres por lo que se requiera
            //las variables son las que hay que usan en el archivo controlador
            //en la función imprimirListaExamples
            nombre_laboratorio : psNombreLaboratorio,
            cantidad_espacios : psCantidadEspacios,
            sede_laboratorio : psSedeLab
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

function modificarLaboratorio(psNombreLaboratorio, psCantidadEspacios, psSedeLab){
    let respuesta = '';
    let peticion = $.ajax({

        //*cambiar example en el url por lo que se vaya a registrar, debe estar en singular
        url : 'http://localhost:4000/api/modificar_laboratorio',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre_laboratorio : psNombreLaboratorio,
            cantidad_espacios : psCantidadEspacios,
            sede_laboratorio : psSedeLab
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